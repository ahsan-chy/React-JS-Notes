# .Env Setup

Content

- Setup .env in
  - `Create-React-App`
  - `Vite`
- How Make Env for Development - Production - Example
- Use ENV
- Packages
- Ignore ENV File
-
-
-

## Setup .env in

### Creat React App

Setup .env

```javascript
REACT_APP_FIREBASE_API_KEY = AIzaSyBa6TsstqPR2CwyZGAYOBrCh5oqSMOXVhU;
REACT_APP_FIREBASE_AUTH_DOMAIN = space - city - next.firebaseapp.com;
REACT_APP_FIREBASE_PROJECT_ID = space - city - next;
```

Use Environment Variables

```javascript
apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
```

### Vite env

Setup .env

- Must use **`VITE`** in start of environment variable

```javascript
VITE_FIREBASE_API_KEY = AIzaSyBa6TsstqPR2CwyZGAYOBrCh5oqSMOXVhU;
VITE_FIREBASE_AUTH_DOMAIN = space - city - next.firebaseapp.com;
VITE_FIREBASE_PROJECT_ID = space - city - next;
```

Use Environment Variables

```javascript
import.meta.env.VITE_FIREBASE_API_KEY;
import.meta.env.VITE_FIREBASE_AUTH_DOMAIN, import.meta.env.VITE_FIREBASE_PROJECT_ID;
```


### Packages

For frontend projects, particularly those built with tools like Create React App or Vite, you typically don't need a package like **`dotenv`**. Environment variables in the frontend are usually handled differently.




### Ignore 

```
.env
```

