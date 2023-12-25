
# Node JS

## Database

Connect Database 

```javascript
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set("strictQuery", true);
const connectDB = async() =>{
  try {
     const conn = await mongoose.connect(process.env.MONG_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`);
 } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit()
 }
}

module.exports = connectDB
```


## Table of content - Packages
- [express](https://github.com/ahsan-chy/hello-world/tree/Node-js/14%20Node%20JS#express)
- [nodemon](https://github.com/ahsan-chy/hello-world/tree/Node-js/14%20Node%20JS#nodemon)
- [morgan](https://github.com/ahsan-chy/hello-world/tree/Node-js/14%20Node%20JS#morgan)
- [cors](https://github.com/ahsan-chy/hello-world/tree/Node-js/14%20Node%20JS#cors)
- [dotenv](https://github.com/ahsan-chy/hello-world/tree/Node-js/14%20Node%20JS#dotenv)
- [validator](https://github.com/ahsan-chy/hello-world/tree/Node-js/14%20Node%20JS#validator)
- [bcrypt](https://github.com/ahsan-chy/hello-world/tree/Node-js/14%20Node%20JS#bcrypt)
- [chalk](https://github.com/ahsan-chy/hello-world/tree/Node-js/14%20Node%20JS#chalk)
- [slugify](https://github.com/ahsan-chy/hello-world/tree/Node-js/14%20Node%20JS#slugify)
- [jsonwebtoken](https://github.com/ahsan-chy/hello-world/tree/Node-js/14%20Node%20JS#jsonwebtoken)
- [body-parser](https://github.com/ahsan-chy/hello-world/tree/Node-js/14%20Node%20JS#body-parser)
- [socketio](https://github.com/ahsan-chy/hello-world/tree/Node-js/14%20Node%20JS#socketio)


Packages that used in Node JS 

### express
```javascript
npm i express
```
 Express.js is to make it easier to develop web applications by providing a range of useful features, including:
- Routing
- Middleware
- Templating
- Error handling
- Support for various HTTP methods - GET, POST, PUT, DELETE, and PATCH

### nodemon
```javascript
npm i nodemon
```
Automatically restart the application when changes are made to the code

### morgan
```javascript
npm i morgan
```
Request logger show status req. 
**`morgan`** is a popular logging middleware for Node.js that is used to log HTTP requests and responses. 

### cors
```javascript
npm i cors
```
**CORS stands for Cross-Origin Resource Sharing,** and it is a mechanism that allows web servers to selectively allow or restrict access to resources on a different origin (domain, protocol, or port).

.

### dotenv
```javascript
npm i dotenv
```
**`dotenv`** is a popular Node.js module that is used to load environment variables from a **`.env`** file into a Node.js application. 

### validator
```javascript
npm i validator
```
**`validator`** is a popular Node.js module that provides a set of functions for validating and sanitizing strings. The purpose of **`validator`** is to make it easy to validate user input and ensure that it meets certain requirements or constraints, such as being a valid email address, URL, or phone number.

### bcrypt
```javascript
npm i bcrypt
```
**`bcrypt`** is a popular Node.js module that provides a secure way to hash and compare passwords. The purpose of bcrypt is to make it difficult for attackers to recover passwords from a hash and to prevent attackers from using the same hash to authenticate as the user.

### chalk
```javascript
npm i chalk
```
 

### slugify
```javascript
npm i slugify
```
 

### jsonwebtoken
```javascript
npm i jsonwebtoken
```
JSON Web Token (JWT) is a popular method for securely transmitting information between parties as a JSON object.
- Secure transmission
- Stateless authentication

### body-parser
```javascript
npm i body-parser
```
**`body-parser`** is a middleware library for Node.js that extracts the body portion of an incoming HTTP request and makes it available in the **`req.body`** object of your Express.js application.


### socket.io
```javascript
npm install socket.io
```
**Socket.IO** is a library that enables low-latency, bidirectional and event-based communication between a client and a server.


