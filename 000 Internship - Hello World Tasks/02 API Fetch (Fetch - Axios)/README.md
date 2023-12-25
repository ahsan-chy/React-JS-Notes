## API Fetch (Fetch - Axios)

### Fetch Method

First Method to access any data from API.

```javascript
fetch('https://fakestoreapi.com/products/')
      .then(res=>res.json())
      .then(json=>console.log(json))
```

.

Put **Fetch** in  **`Async - Await`** function 
```javascript
async function allProducts() 
    {
        let response = await fetch(`https://fakestoreapi.com/products`);
        let data = await response.json()
        setProducts(data)
        return data;
    }

allProducts()
```

.

Put **`Try - Catch`** inside **`Async - Await`** function 
```javascript
async function allProducts() 
    {
      try{
        let response = await fetch(`https://fakestoreapi.com/products`);
        let data = await response.json()
        setProducts(data)
        return data;
      }
      catch(error)
      {
        console.log(error.message)
      }
    }
allProducts()
```



## Axiox Api Fetch

First Axios Method to access API Data.
- [Axios](https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/)
- [NPM Axios](https://www.npmjs.com/package/axios)
- [How To Use Axios with React](https://www.digitalocean.com/community/tutorials/react-axios-react)


![Axios](https://miro.medium.com/max/1200/1*Uu1eCopfZ5grgzVuIesQVw.png)
```javascript
axios.get('https://fakestoreapi.com/products')
  .then(function (response) {
    console.log(response);
  })
```

.

Put **Fetch** in  **`Async - Await`** function 
```javascript
let getResults = async() => {
  let result = await axios.get('https://fakestoreapi.com/products')
    console.log(result.data);
}
getResults()
```
.

Put **`Try - Catch`** inside **`Async - Await`** function 

```javascript
let getProducts = async() => {
        try{
            let result = await axios.get('https://fakestoreapi.com/products')
            setProducts(result.data)
        }
        catch(error){
            setIsError(error.message)
            console.log("error")
        }
    }
getProducts()
```
.

Advance Method of API Data Handling in React JS.

```javascript
const [products, setProducts] = useState([])

const API = "https://fakestoreapi.com"
const PRO ="products"

let getProducts2 = async(url) => {
        try{
            let result = await axios.get(url)
            setProducts(result.data)
        }
        catch(error){
            setIsError(error.message)
            console.log("error")
        }
    }

useEffect(()=>{
    getProducts2(`${API}/${PRO}`)
},[])
```

#### Axiox Authorization Header 

[How to send the authorization header using Axios](https://flaviocopes.com/axios-send-authorization-header/)

```javascript
axios.get('https://api.github.com/user', {
  headers: {
    'Authorization': `token ${access_token}`
      //token can be Bearer or other
  }
})
.then((res) => {
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})
```
## Strapi API Authentication

```javascript
const getProducts = async() => {
    try {
        let result = await axios.get(`${STRAPI_API_URL}/products?populate=*`, {
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`
                }
                })
                setProducts(result.data.data)
    } catch (error) {
        setErr(error.message);
} }

useEffect(()=>{
    getProducts()
},[])

```


### Post Method - Axios

Axios is a simple promise based HTTP client for the browser and node.js. Axios
provides a simple to use library in a small package with a very extensible.

[Axios - HTTP POST Request Examples](https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples)


![Axios](https://www.tutsmake.com/wp-content/uploads/2021/06/React-JS-Axios-Post-HTTP-Request-Example.jpg)


Post Data in Api:

```javascript
const URL = 'http://localhost:5000/api/user/login';

axios.post(URL, {
    firstName: 'Anonymous',
    lastName: 'Traitor'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

Post multiple in APIs:

```javascript
// Post request example
axios.all([
  axios.post('/api/users', {
    name: 'John Smith',
    email: 'john@example.com'
  }),
  axios.post('/api/users', {
    name: 'Jane Smith',
    email: 'jane@example.com'
  })
])
.then(axios.spread((response1, response2) => {
  // Both requests are now complete
  console.log(response1.data);
  console.log(response2.data);
}))
.catch(error => {
  // An error occurred for one of the requests
  console.error(error);
});

```



Async - Try Catch - Post Request

```javascript
const onSubmit = async (FormData) => {
  FormData.bFlats = meters;
  try {
    let res = await axios({
      method: 'post',
      url: 'http://localhost:5000/api/v1/buildings',
      data: FormData
    });

    console.log(res.data);
    if (res.data.status === 'success') {
      alert("Successfully Inserted");
      reset();
    }
  } catch (error) {
    console.log(error.response.data.message); // this is the main part. Use the response property from the error object
  }
}
```


Request with Headers
```javascript
const options = {
  url: 'http://localhost:3000/api/home',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  data: {
    name: 'David',
    age: 45
  }
};

axios(options)
  .then(response => {
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


### Post with Fetch

[React + Fetch - HTTP POST Request Examples](https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples)

![fetch post](https://i.ytimg.com/vi/nQiYpBzquaM/maxresdefault.jpg)

