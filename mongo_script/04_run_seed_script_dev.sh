#!/bin/bash
export base_data_path='./mongodb-seed/data/*'

for dir in $base_data_path; do
  #echo  "$(basename "$dir")"

  for file in $dir/*.json; do

    filex="$(basename -- "$file")"
    purefilename="${filex%%.*}"
    cmd='mongoimport --host 10.5.25.13 --port 27017 --username selise_dev --password 4rfvVFR$ --authenticationDatabase admin --db '$(basename $dir)' -c '$purefilename' --upsert --file  '$file
    echo $cmd
    $cmd

  done

done
