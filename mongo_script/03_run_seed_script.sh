#!/bin/bash
export base_data_path='./mongodb-seed/data/*'

for dir in $base_data_path; do
  #echo  "$(basename "$dir")"

  for file in $dir/*.json; do

    filex="$(basename -- "$file")"
    purefilename="${filex%%.*}"
    cmd='mongoimport --host 10.5.13.10 --port 27017 --db '$(basename $dir)' -c '$purefilename' --upsert --file  '$file
    echo $cmd
    $cmd

  done

done
