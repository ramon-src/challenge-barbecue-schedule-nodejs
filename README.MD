## ENVIRONMENT SETUP 

### REQUIREMENTS
Node.js v8.12+
MongoDB 3.6.3+

### UPDATE YOUR SYSTEM LIST REFERENCES
```sh
sudo apt update
```

### INSTALL N
```sh
cd /tmp
git clone --depth=1 https://github.com/tj/n
cd n
sudo make install
```
### INSTALL NODEJS LTS

```sh
n lts && node -v
```

### INSTALL MONGO DB DRIVER
```sh
sudo apt install -y mongodb && systemctl status mongodb
```



## SEEDING MONGO

Prepare Env script runs the seeders which creates the whole collections

```sh
npm run prepare-env
```

## USING MONGO SHELL TO VALIDATE

```sh
mongo

show collections

show dbs

use barbecueschedule

db.events.find().pretty()

```

## APP SETUP 

```sh
npm install
```
### ENABLING VSCODE DEBUGGING LAUNCH

Configure the launch.json inside vscode to run the script debug
so you can "Launch debugging Barbecue Schedule" inside vscode

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch debugging Barbecue Schedule",
            "type": "node",
            "request": "launch",
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": "npm",
            "runtimeArgs": [
                "run-script", "debug"
            ],
            "port": 9229
        }
    ]
}
```
