#!/bin/bash

validEnvironments=("production" "development")
currentEnvironment=""

for environment in ${validEnvironments[@]}
do 
    if [ "$1" = "$environment" ]
    then
        echo "env=$environment"
        currentEnvironment=$environment
        break
    fi
done

if [ "$currentEnvironment" = "" ] 
then 
    if [ "$1" = "" ]
    then 
        echo "[Error] docker-build.sh script needs exactly 1 argument"
    else 
        echo "[Error] argument '$1' invalid!"
    fi
        echo "[Info] valid arguments are: 'development' | 'production'"
else 
    . docker/$environment/docker-run.sh
fi
