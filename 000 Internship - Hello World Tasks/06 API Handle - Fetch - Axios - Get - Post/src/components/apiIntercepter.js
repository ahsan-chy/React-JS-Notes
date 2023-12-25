import axios from "axios";

// const API = axios.create()

const productsData = {
    method: 'GET',
    header: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
}

export default productsData