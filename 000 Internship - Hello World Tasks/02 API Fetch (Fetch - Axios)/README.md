## API Fetch (Fetch - Axios)

- [API Fetch (Fetch - Axios)](#api-fetch-fetch---axios)
  - [Fetch Method](#fetch-method)
  - [React + Fetch - HTTP POST Request Examples](#react--fetch---http-post-request-examples)
- [Axiox Api Fetch](#axiox-api-fetch)
  - [Axios Functions](#axios-functions)
  - [Axios Authorization Header](#axios-authorization-header)
  - [Strapi API Authentication](#strapi-api-authentication)
  - [Post Method - Axios](#post-method---axios)
    - [Post Data in Api:](#post-data-in-api)
    - [Post multiple in APIs:](#post-multiple-in-apis)
    - [Async - Try Catch - Post Request](#async---try-catch---post-request)
    - [Request with Headers](#request-with-headers)
  - [Axios Interceptor](#axios-interceptor)
  - [Authorization - Authentication](#authorization---authentication)
  - [Bearer Token - Access Token - Refresh Token - JWT Token -](#bearer-token---access-token---refresh-token---jwt-token--)

### Fetch Method

First Method to access any data from API.

```javascript
fetch("https://fakestoreapi.com/products/")
  .then((res) => res.json())
  .then((json) => console.log(json));
```

.

Put **Fetch** in **`Async - Await`** function

```javascript
async function allProducts() {
  let response = await fetch(`https://fakestoreapi.com/products`);
  let data = await response.json();
  setProducts(data);
  return data;
}

allProducts();
```

.

Put **`Try - Catch`** inside **`Async - Await`** function

```javascript
async function allProducts() {
  try {
    let response = await fetch(`https://fakestoreapi.com/products`);
    let data = await response.json();
    setProducts(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
allProducts();
```

### React + Fetch - HTTP POST Request Examples

[React + Fetch - HTTP POST Request Examples](https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples)

![fetch post](https://i.ytimg.com/vi/nQiYpBzquaM/maxresdefault.jpg)

## Axiox Api Fetch

First Axios Method to access API Data.

- [Axios](https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/)
- [NPM Axios](https://www.npmjs.com/package/axios)
- [How To Use Axios with React](https://www.digitalocean.com/community/tutorials/react-axios-react)

![Axios](https://miro.medium.com/max/1200/1*Uu1eCopfZ5grgzVuIesQVw.png)

```javascript
axios.get("https://fakestoreapi.com/products").then(function (response) {
  console.log(response);
});
```

.

Put **Fetch** in **`Async - Await`** function

```javascript
let getResults = async () => {
  let result = await axios.get("https://fakestoreapi.com/products");
  console.log(result.data);
};
getResults();
```

.

Put **`Try - Catch`** inside **`Async - Await`** function

```javascript
let getProducts = async () => {
  try {
    let result = await axios.get("https://fakestoreapi.com/products");
    setProducts(result.data);
  } catch (error) {
    setIsError(error.message);
    console.log("error");
  }
};
getProducts();
```

.

Advance Method of API Data Handling in React JS.

```javascript
const [products, setProducts] = useState([]);

const API = "https://fakestoreapi.com";
const PRO = "products";

let getProducts2 = async (url) => {
  try {
    let result = await axios.get(url);
    setProducts(result.data);
  } catch (error) {
    setIsError(error.message);
    console.log("error");
  }
};

useEffect(() => {
  getProducts2(`${API}/${PRO}`);
}, []);
```

#### Axios Functions

Axios provides several functions for making HTTP requests and performing various tasks related to network communication. Here are some of the most commonly used Axios functions and their uses:

1. **axios(config)**:

   - This is the primary function used to make HTTP requests. It takes a configuration object as an argument, which can include properties such as `method`, `url`, `params`, `headers`, `data`, etc.
   - Example:
     ```javascript
     axios({
       method: "get",
       url: "/api/users",
       params: {
         page: 1,
         limit: 10,
       },
     })
       .then((response) => {
         console.log(response.data);
       })
       .catch((error) => {
         console.error("Error:", error);
       });
     ```

2. **axios.get(url[, config])**:

   - This function is a shorthand for making GET requests.
   - Example:
     ```javascript
     axios
       .get("/api/users", {
         params: {
           page: 1,
           limit: 10,
         },
       })
       .then((response) => {
         console.log(response.data);
       })
       .catch((error) => {
         console.error("Error:", error);
       });
     ```

3. **axios.post(url[, data[, config]])**:

   - This function is a shorthand for making POST requests.
   - Example:
     ```javascript
     axios
       .post("/api/users", {
         name: "John Doe",
         email: "john@example.com",
       })
       .then((response) => {
         console.log(response.data);
       })
       .catch((error) => {
         console.error("Error:", error);
       });
     ```

4. **axios.put(url[, data[, config]])**:

   - This function is a shorthand for making PUT requests.
   - Example:
     ```javascript
     axios
       .put("/api/users/123", {
         name: "Updated Name",
       })
       .then((response) => {
         console.log(response.data);
       })
       .catch((error) => {
         console.error("Error:", error);
       });
     ```

5. **axios.delete(url[, config])**:

   - This function is a shorthand for making DELETE requests.
   - Example:
     ```javascript
     axios
       .delete("/api/users/123")
       .then((response) => {
         console.log(response.data);
       })
       .catch((error) => {
         console.error("Error:", error);
       });
     ```

6. **axios.create([config])**:
   - This function creates a new Axios instance with default configuration options.
   - It's useful for creating multiple Axios instances with different configurations, such as different base URLs, headers, etc.
   - Example:
     ```javascript
     const instance = axios.create({
       baseURL: "https://api.example.com",
       timeout: 5000,
       headers: {
         Authorization: "Bearer token",
       },
     });
     ```

#### Axios Authorization Header

[How to send the authorization header using Axios](https://flaviocopes.com/axios-send-authorization-header/)

```javascript
axios
  .get("https://api.github.com/user", {
    headers: {
      Authorization: `token ${access_token}`,
      //token can be Bearer or other
    },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

### Strapi API Authentication

```javascript
const getProducts = async () => {
  try {
    let result = await axios.get(`${STRAPI_API_URL}/products?populate=*`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
    setProducts(result.data.data);
  } catch (error) {
    setErr(error.message);
  }
};

useEffect(() => {
  getProducts();
}, []);
```

### Post Method - Axios

Axios is a simple promise based HTTP client for the browser and node.js. Axios
provides a simple to use library in a small package with a very extensible.

[Axios - HTTP POST Request Examples](https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples)

![Axios](https://www.tutsmake.com/wp-content/uploads/2021/06/React-JS-Axios-Post-HTTP-Request-Example.jpg)

##### Post Data in Api:

```javascript
const URL = "http://localhost:5000/api/user/login";

axios
  .post(URL, {
    firstName: "Anonymous",
    lastName: "Traitor",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

##### Post multiple in APIs:

```javascript
// Post request example
axios
  .all([
    axios.post("/api/users", {
      name: "John Smith",
      email: "john@example.com",
    }),
    axios.post("/api/users", {
      name: "Jane Smith",
      email: "jane@example.com",
    }),
  ])
  .then(
    axios.spread((response1, response2) => {
      // Both requests are now complete
      console.log(response1.data);
      console.log(response2.data);
    })
  )
  .catch((error) => {
    // An error occurred for one of the requests
    console.error(error);
  });
```

##### Async - Try Catch - Post Request

```javascript
const onSubmit = async (FormData) => {
  FormData.bFlats = meters;
  try {
    let res = await axios({
      method: "post",
      url: "http://localhost:5000/api/v1/buildings",
      data: FormData,
    });

    console.log(res.data);
    if (res.data.status === "success") {
      alert("Successfully Inserted");
      reset();
    }
  } catch (error) {
    console.log(error.response.data.message); // this is the main part. Use the response property from the error object
  }
};
```

##### Request with Headers

```javascript
const options = {
  url: "http://localhost:3000/api/home",
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  data: {
    name: "David",
    age: 45,
  },
};

axios(options).then((response) => {
  console.log(response.status);
});
```

```javascript
import axios from "axios";
// 2 ways of doing it.
// using axios(options)
await axios({  // You can use async/await or .then()
	url: 'URL'
    method: 'POST'
    headers:{}
    data:{} //this is the body of the request
})

// Using axios.post('URL', data, options)

await axios.post('URL', { username: 'test', password: '123456' }, { headers:{} })
```

### Axios Interceptor

```javascript

```

### Authorization - Authentication

- **Authorization**: Eligibal to access resources, Authorization is the process of verifying what they have access to. **What you can access, or what you can use**

- **Authentication**: Authentication is the process of verifying who a user is.**Who you are**

4 Secure API Authentication Methods

1. **API Keys**: API Keys are secret tokens used to authenticate API requests. They usually consist of a public key and a private key, and they help API providers identify the API consumer and grant them access to API resources.
2. **OAuth 2.0**
   OAuth 2.0 is an authorization protocol that gives API users access to a service without sharing their passwords. It's often used for authentication in web, mobile, and desktop applications. OAuth 2.0 is based on the 'token' concept, which allows API users to show they are authenticated without sending the API their username and password every time they request.
3. **HTTP Authentication Schemes (Basic & Bearer)**
   Basic and Bearer authentication schemes are widely used API authentication methods. They both use HTTP headers to authenticate API users, and they can be used in combination with API Keys for added security.
4. **JWT Authentication (JSON Web Token)**
   JSON Web Token (JWT) authentication is an API authentication method that uses tokens to authenticate API consumers. This API authentication method uses JSON data structures to store authentication information for API users, such as usernames and expiration dates.

### Bearer Token - Access Token - Refresh Token - JWT Token -
