import os
import pandas as pd

# Specify the folder containing Excel files
folder_path = 'C:/Users/raiha/OneDrive/Desktop/Data'

# Get a list of all Excel files in the folder
excel_files = [f for f in os.listdir(folder_path) if f.endswith('.xlsx')]

# Initialize an empty DataFrame to store the combined data
combined_data = pd.DataFrame()

# Loop through each Excel file and append its sheets to the combined DataFrame
for file in excel_files:
    file_path = os.path.join(folder_path, file)
    excel_data = pd.read_excel(file_path, sheet_name=None)  # Read all sheets into a dictionary

    # Iterate through each sheet and concatenate to the combined DataFrame
    for sheet_name, sheet_data in excel_data.items():
        combined_data = pd.concat([combined_data, sheet_data], ignore_index=True)

# Write the combined DataFrame to a new Excel file
combined_file_path = os.path.join(folder_path, 'input.xlsx')
combined_data.to_excel(combined_file_path, index=False)

print(f'Combined data saved to {combined_file_path}')
