import pandas as pd
import numpy as np
from sklearn.neural_network import MLPRegressor
from sklearn.metrics import mean_squared_error, r2_score

# Load your data from the Excel sheet
file_path = 'C:/Users/raiha/OneDrive/Desktop/Data/input.xlsx'
# Replace with path to your Excel file
df = pd.read_excel(file_path)

# Extract input features ('Ra', 'Ha', 'w', 'x') and output (Nu (avg,s))
X = df[['Ra', 'Ha', 'w', 'x']].values
Y = df['Nu (avg,s)'].values

# Build a simple feedforward neural network
model = MLPRegressor(hidden_layer_sizes=(10,), max_iter=1000)
model.fit(X, Y)

# Predict Y_hat for all rows
Y_hat = model.predict(X)
df['Nu (avg,a)'] = Y_hat

# Calculate MSE (E0) and write to the Excel sheet
mse = mean_squared_error(Y, Y_hat)
df['E0'] = mse

# Calculate R^2 (E1) and write to the Excel sheet
r2 = r2_score(Y, Y_hat)
df['E1'] = 1 - r2

# Calculate RMSE (E2) and write to the Excel sheet
rmse = np.sqrt(mean_squared_error(Y, Y_hat))
df['E2'] = rmse

# Calculate RMRE (E3) and write to the Excel sheet
rmre = np.sqrt(np.mean(np.abs(Y - Y_hat) / np.mean(Y)))
df['E3'] = rmre

# Save the updated DataFrame to the Excel file
df.to_excel(file_path, index=False)
