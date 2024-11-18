#!/bin/bash

# Define MongoDB connection details
ADDRESS="10.5.13.10"
PORT="27017"
DATABASE="A0068B42-BE66-409B-BD63-83D576308F9A"

# Define Directory and Timestamp for backup folder
BACKUP_DIR="./backup"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
mkdir -p $BACKUP_DIR/$TIMESTAMP


export base_data_path='./mongodb-seed/data/*'
for dir in $base_data_path; do
  #echo  "$(basename "$dir")"

  for file in $dir/*.json; do
    filex="$(basename -- "$file")"
    purefilename="${filex%%.*}"
    cmd='mongoexport --forceTableScan --host '$ADDRESS' --port '$PORT' --db '$DATABASE' --collection '$purefilename' --out '$BACKUP_DIR/$TIMESTAMP/$purefilename'.json'
    echo $cmd
    $cmd

  done

done
