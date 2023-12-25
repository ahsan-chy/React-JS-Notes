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

