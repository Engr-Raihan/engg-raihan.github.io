#!/bin/bash

# Define MongoDB connection details
ADDRESS="10.5.25.13"
PORT="27017"
DATABASE="A0068B42-BE66-409B-BD63-83D576308F9A"
USERNAME="selise_dev"
PASSWORD="4rfvVFR$"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

export base_data_path='./mongodb-seed/data/*'

for dir in $base_data_path; do
  #echo  "$(basename "$dir")"

  for file in $dir/*.json; do
    filex="$(basename -- "$file")"
    purefilename="${filex%%.*}"
    cmd='mongoexport --forceTableScan --host '$ADDRESS' --port '$PORT' --username '$USERNAME' --password '$PASSWORD' --authenticationDatabase admin --db '$DATABASE' --collection '$purefilename' --out /.backup/'$TIMESTAMP/$purefilename'.json'
    echo $cmd
    $cmd

  done

done
