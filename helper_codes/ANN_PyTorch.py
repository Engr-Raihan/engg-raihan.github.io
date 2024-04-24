import pandas as pd
import numpy as np
import torch
import torch.nn as nn
import torch.optim as optim
from torch.autograd import Variable
import matplotlib.pyplot as plt
from sklearn.metrics import mean_squared_error, r2_score

# Load your data from the Excel sheet
file_path = 'your_excel_file.xlsx'  # Replace with the path to your Excel file
df = pd.read_excel(file_path)

# Extract input features (X1, X2, X3, X4) and output (Y)
X = df[['X1', 'X2', 'X3', 'X4']].values
Y = df['Y'].values

# Convert data to PyTorch tensors
X_tensor = torch.FloatTensor(X)
Y_tensor = torch.FloatTensor(Y).view(-1, 1)

# Define a simple feedforward neural network
class NeuralNetwork(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(NeuralNetwork, self).__init__()
        self.layer1 = nn.Linear(input_size, hidden_size)
        self.layer2 = nn.Linear(hidden_size, output_size)
        self.activation = nn.ReLU()

    def forward(self, x):
        x = self.layer1(x)
        x = self.activation(x)
        x = self.layer2(x)
        return x

# Function to train the neural network
def train_neural_network(model, X, Y, num_epochs, learning_rate):
    criterion = nn.MSELoss()
    optimizer = optim.Adam(model.parameters(), lr=learning_rate)

    losses = []

    for epoch in range(num_epochs):
        # Forward pass
        Y_hat = model(X)
        loss = criterion(Y_hat, Y)

        # Backward pass and optimization
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        losses.append(loss.item())

    return losses

# Function to evaluate the model and calculate metrics
def evaluate_model(model, X, Y):
    model.eval()
    with torch.no_grad():
        Y_hat = model(X)
    model.train()

    mse = mean_squared_error(Y.numpy(), Y_hat.numpy())
    r2 = 1 - r2_score(Y.numpy(), Y_hat.numpy())
    rmse = np.sqrt(mse)
    rmre = np.sqrt(np.mean(np.abs(Y.numpy() - Y_hat.numpy()) / np.mean(Y.numpy())))

    return mse, r2, rmse, rmre, Y_hat.numpy()

# Training parameters
input_size = X.shape[1]
hidden_size = 10
output_size = 1
num_epochs = 100
learning_rate = 0.001

# Initialize the model
model = NeuralNetwork(input_size, hidden_size, output_size)

# Train the model
losses = train_neural_network(model, X_tensor, Y_tensor, num_epochs, learning_rate)

# Evaluate the model
mse, r2, rmse, rmre, predictions = evaluate_model(model, X_tensor, Y_tensor)

# Add predictions to DataFrame
df['Y_Hat'] = predictions

# Plot Task 1: Error Vs Iteration
plt.plot(losses)
plt.xlabel('Iteration')
plt.ylabel('MSE Loss')
plt.title('Error Vs Iteration')
plt.show()

# Plot regression for minimum error configuration
min_error_index = np.argmin(losses)
min_predictions = evaluate_model(model, X_tensor, Y_tensor)[-1]
plt.scatter(Y, min_predictions)
plt.plot([min(Y), max(Y)], [min(Y), max(Y)], linestyle='--', color='red', label='Perfect Prediction')
plt.xlabel('True Values')
plt.ylabel('Predictions')
plt.title(f'Regression Plot for Minimum Error (Iteration={min_error_index})')
plt.legend()
plt.show()

# Plot Task 3: Error Vs Number of Neurons (using num_epochs as the number of neurons)
neuron_values = list(range(5, 101, 5))
mse_list, r2_list, rmse_list, rmre_list = [], [], [], []

for neurons in neuron_values:
    model = NeuralNetwork(input_size, neurons, output_size)
    losses = train_neural_network(model, X_tensor, Y_tensor, num_epochs, learning_rate)
    mse, r2, rmse, rmre, _ = evaluate_model(model, X_tensor, Y_tensor)
    mse_list.append(mse)
    r2_list.append(r2)
    rmse_list.append(rmse)
    rmre_list.append(rmre)

plt.plot(neuron_values, mse_list, label='MSE')
plt.plot(neuron_values, r2_list, label='R^2')
plt.plot(neuron_values, rmse_list, label='RMSE')
plt.plot(neuron_values, rmre_list, label='RMRE')
plt.xlabel('Number of Neurons (Epochs)')
plt.ylabel('Error')
plt.legend()
plt.title('Error Vs Number of Neurons (Epochs)')
plt.show()
