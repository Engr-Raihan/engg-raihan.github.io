#!/bin/bash

# Collections to backup
COLLECTIONS=(
	"Entitys"
	"TagValidators"
	"EntityColumnPermisssions"
	"EntityDefaultPermissionSettingss"
	"UserReadableDatas"
	"FeatureEndPointMaps"
	"FeatureRoleMaps"
	"EmailTemplates"
    )


# Define MongoDB connection details
ADDRESS="10.5.25.13"
PORT="27017"
DATABASE="A0068B42-BE66-409B-BD63-83D576308F9A"
USERNAME="selise_dev"
PASSWORD="4rfvVFR$"

# Define Directory and Timestamp for backup folder
BACKUP_DIR="./mongodb-seed/data"
# TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# Create backup directory if it doesn't exist
mkdir -p $BACKUP_DIR

# Perform backup for each collection using mongodump
for COLLECTION in "${COLLECTIONS[@]}"
do
	# mongodb+srv://selise_dev:4rfvVFR$@10.5.25.13/admin
    mongoexport --forceTableScan --host $ADDRESS --port $PORT --username $USERNAME --password $PASSWORD --authenticationDatabase admin --db $DATABASE --collection $COLLECTION --out $BACKUP_DIR/$DATABASE/$COLLECTION.json
done

# Check if the backup was successful
if [ $? -eq 0 ]; then
    echo "Backup $DATABASE is completed successfully"
else
    echo "Backup $DATABASE is failed!"
fi