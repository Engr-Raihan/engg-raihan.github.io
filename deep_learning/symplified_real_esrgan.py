import os
import torch
import torch.nn as nn
from torch.utils.data import DataLoader, Dataset
from torchvision import transforms
from torch.optim import Adam
from tqdm import tqdm
from PIL import Image


# Assuming you have defined SimpleRealESRGAN and ResidualBlock classes
class SimpleRealESRGAN(nn.Module):
    def __init__(self, scale_factor=4, num_residual_blocks=16):
        super(SimpleRealESRGAN, self).__init__()

        # Feature extraction
        self.conv1 = nn.Conv2d(3, 64, kernel_size=3, stride=1, padding=1)
        self.relu = nn.ReLU(inplace=True)

        # Residual blocks
        self.res_blocks = self.make_residual_blocks(num_residual_blocks)

        # Upsampling
        self.upsample = nn.Upsample(scale_factor=scale_factor, mode='bicubic')

        # Output layer
        self.conv_out = nn.Conv2d(64, 3, kernel_size=3, stride=1, padding=1)

    def make_residual_blocks(self, num_blocks):
        layers = []
        for _ in range(num_blocks):
            layers.append(ResidualBlock())
        return nn.Sequential(*layers)

    def forward(self, x):
        out = self.conv1(x)
        out = self.relu(out)
        residual = out
        out = self.res_blocks(out)
        out = torch.add(out, residual)
        out = self.upsample(out)
        out = self.conv_out(out)
        return out


class ResidualBlock(nn.Module):
    def __init__(self):
        super(ResidualBlock, self).__init__()
        self.conv1 = nn.Conv2d(64, 64, kernel_size=3, stride=1, padding=1)
        self.bn1 = nn.BatchNorm2d(64)
        self.relu = nn.ReLU(inplace=True)
        self.conv2 = nn.Conv2d(64, 64, kernel_size=3, stride=1, padding=1)
        self.bn2 = nn.BatchNorm2d(64)

    def forward(self, x):
        residual = x
        out = self.conv1(x)
        out = self.bn1(out)
        out = self.relu(out)
        out = self.conv2(out)
        out = self.bn2(out)
        out += residual
        return out


# Assuming you have your dataset prepared and stored in folders named 'train', 'val'
class CustomDataset(Dataset):
    def __init__(self, root_dir, transform=None):
        self.root_dir = root_dir
        self.transform = transform
        self.image_filenames = [filename for filename in os.listdir(root_dir) if filename.endswith(('.jpg', '.jpeg', '.png'))]

    def __len__(self):
        return len(self.image_filenames)

    def __getitem__(self, idx):
        img_name = os.path.join(self.root_dir, self.image_filenames[idx])
        image = Image.open(img_name).convert("RGB")
        
        if self.transform:
            image = self.transform(image)

        # Assuming high-resolution image is stored in the same directory with "_hr" suffix
        hr_img_name = img_name.replace(".", "_hr.")
        hr_image = Image.open(hr_img_name).convert("RGB")
        
        if self.transform:
            hr_image = self.transform(hr_image)

        return image, hr_image


train_dir = ''
val_dir = ''
batch_size = 16
learning_rate = 0.001
num_epochs = 50
input_height = 64
input_width = 64


# Load dataset
transform = transforms.Compose([
    transforms.ToTensor(),  # Convert images to tensors
])

train_dataset = CustomDataset(train_dir, transform=transform)
val_dataset = CustomDataset(val_dir, transform=transform)

train_loader = DataLoader(train_dataset, batch_size=batch_size, shuffle=True)
val_loader = DataLoader(val_dataset, batch_size=batch_size)

# Define loss function
criterion = nn.MSELoss()

# Initialize model
model = SimpleRealESRGAN()

# Initialize optimizer
optimizer = Adam(model.parameters(), lr=learning_rate)

# Training loop
for epoch in range(num_epochs):
    model.train()
    train_loss = 0.0
    for inputs, targets in tqdm(train_loader, desc=f"Epoch {epoch+1}/{num_epochs}"):
        optimizer.zero_grad()
        outputs = model(inputs)
        loss = criterion(outputs, targets)
        loss.backward()
        optimizer.step()
        train_loss += loss.item() * inputs.size(0)
    train_loss /= len(train_loader.dataset)

    # Validation loop
    model.eval()
    val_loss = 0.0
    with torch.no_grad():
        for inputs, targets in val_loader:
            outputs = model(inputs)
            loss = criterion(outputs, targets)
            val_loss += loss.item() * inputs.size(0)
        val_loss /= len(val_loader.dataset)

    print(f"Epoch {epoch+1}/{num_epochs}, Train Loss: {train_loss:.4f}, Val Loss: {val_loss:.4f}")

# Test the model
test_input = torch.randn(1, 3, input_height, input_width)

# Replace with your test image
output_image = model(test_input)
