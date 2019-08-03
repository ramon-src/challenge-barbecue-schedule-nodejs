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



## SEEDING USERS

Add some users by requesting the API
First you need to install something like Postman or Advanced Rest API

Start the Nodejs App, then run:
```
POST: http://localhost:8080/user/add
With: Content-Type: application/json
And Raw Body: {
	"username": "Robert Martin",
	"email": "robertmartin@gmail.com",
	"password": "a"
}

```

## USING MONGO SHELL TO VALIDATE

```sh
mongo

show collections

show dbs

use barbecueschedule

db.user.find().pretty()

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

## USAGE

### START THE APP

```sh
npm start
```

or if you want hot reload

```sh
npm run dev
```
### TEST THE APP

```sh
npm run functional-test
```