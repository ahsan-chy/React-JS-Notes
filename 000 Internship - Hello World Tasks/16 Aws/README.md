# AWS - Deploy




- Putty install
- Create Account on Amazon Server
- Create Instence 
- 
- 
- 
- 
- 
- 
- 

### AWS Setup

- Create AWS Account
- Select EC2 Instence 
- Download putty 
- open putteygen
- open putty 
- 


- Go to **Network & Security**   -->   **security groups**  
    --> select `launch-wizard`  goto  **inbbound rules**   
    --> edit **inbound rules**  -->  Add rule
    --> `custom TCP` --> `port range`  --> 0.0.0.0/0  
    save rules  


### Putty Terminal Commonds


```javascript
ec2-user
```

Make Folder **workspace** and open it
```javascript
mkdir workspace
cd workspace
```

Make **super user** and update packages
```javascript
sudo su
```
Update Packages
```javascript
yum update
```
or
```javascript
apt update
```

Install Git 
```javascript
yum install git
```
`Setting Up Node.js on an Amazon EC2 Instance`

Install **node** using following commonds [Commonds Reference Link](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html)
 
```javascript
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```
```javascript
. ~/.nvm/nvm.sh
```
```javascript
nvm install 16 
or 
nvm install node
```
check node || npm version
```javascript
node --version

npm --v
```
#### Clone Git hub code here
```javascript
git clone https://github.com/ahsan-chy/sparkle-server.git
```
Now Enter your username and password
```javascript
username: ahsan-chy
passwrod: token
```
Check following links if :
- [Authentication Faild for the commond Line](https://ginnyfahs.medium.com/github-error-authentication-failed-from-command-line-3a545bfd0ca8)

- [Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)


```javascript
ls

cd sparkle
```

#### Install Packages  
```javascript
npm i
```
Start Server using following commonds
```javascript
npm start
```

### pm2
```javascript
npm install pm2@latest -g
```

```javascript
pm2 start server.js
```

```javascript

```