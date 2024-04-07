
# Authentication - JWT - AUTH0

Install packages
```javascript
npm i express
npm i nodemon
npm install jsonwebtoken
npm i dotenv
```

#### bcryptjs 
This module enables storing of passwords as **hashed passwords** instead of plaintext
```javascript
npm i bcrypt
```

#### Start Server 
```javascript
npm start
```
or
```javascript
npm run devStart
```

#### Generate Rendom 16 digit hex decimal string 
```javascript
require('crypto').randomBytes(64).toString('hex')
```


### Setup Environment Variables

[Reference Link](https://www.npmjs.com/package/dotenv)

![dotenv](https://miro.medium.com/max/1400/1*f5tHnwFfn96kFg-Pth1qFg.jpeg)


 

### JWT 
Jwt is use for **Authorization**. 
```javascript
var jwt = require('jsonwebtoken');

var token = jwt.sign({ foo: 'bar' }, process.env.ACCESS_TOKEN_SECRET);
```

- [JWT.io](https://jwt.io/)
- [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
![JWT Node js](https://res.cloudinary.com/practicaldev/image/fetch/s--Tl_nKagv--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/xy4xerjbrgxvdionvrqr.jpg)

![JWT](https://supertokens.com/static/b0172cabbcd583dd4ed222bdb83fc51a/9af93/jwt-structure.png)


#### How JWT Work
- ![How JWT Work](https://www.vaadata.com/blog/wp-content/uploads/2016/12/JWT_tokens_EN.png)


- [NodeJS User Permission Github Repo](https://github.com/WebDevSimplified/nodejs-user-permissions)
- [MERN JWT REPO](https://github.com/ahsan-chy/mern-with-jwt)
- [MERN JWT Auth](https://github.com/ahsan-chy/mern-jwt-auth)

### jwt.sign(payload, secretOrPrivateKey, [options, callback])

**options:**
- algorithm (default: `HS256`)
- expiresIn
- notBefore
- ....................

**Synchronous** Sign with default (HMAC SHA256)
```javascript 
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'secretkey');
```

**Synchronous** Sign with RSA SHA256
```javascript 
// sign with RSA SHA256
var privateKey = fs.readFileSync('private.key');
var token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' });
```

Sign **asynchronously**
```javascript 
jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256' }, function(err, token) {
  console.log(token);
});
```
Token Expiration (exp claim)
```javascript
jwt.sign({
  data: 'foobar'
}, 'secret', { expiresIn: '1h' });
```

### jwt.verify(token, secretOrPublicKey, [options, callback])

Verify a token symmetric - synchronous
```javascript
var decoded = jwt.verify(token, 'shhhhh');
console.log(decoded.foo) // bar
```
Invalid token - synchronous
```javascript
try {
  var decoded = jwt.verify(token, 'wrong-secret');
} catch(err) {
  // err
}
```


#### Middleware Auth
```javascript 
// Middleware to authenticate the JWT token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
```
```javascript
// Example API endpoint that requires authentication
app.get('/api/profile', verifyToken, (req, res) => {
  res.json({ message: `Hello, ${req.user.username}!` });
});
```


### bcryptjs 
This module enables storing of passwords as **hashed passwords** instead of plaintext
```javascript
npm i bcrypt
```
![Password Hashing](https://uploads-ssl.webflow.com/60658b47b03f0c77e8c14884/6256965282e9d1a5a5df6841_Password%20Hashing.png)
[User Authentication using Passport.js and Bcrypt🎉](https://blog.sagarmedtiya.me/meet-my-latest-project-i-built-user-authentication-using-passportjs-and-bcrypt)

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1662623226786/C2z7H51we.jpg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp)
