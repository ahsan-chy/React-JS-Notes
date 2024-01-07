<<<<<<< HEAD
import {products} from '../db/data';

export function getProductById(id) {
    const product = products.find((p) => p.id === parseInt(id));
    return product;
  }

  export function exportProducts() {
    return products;
  }
  let categories = [...new Set(products.map(p=>p.category))];

  
export function exportCategories() {
    return categories;
=======
import {products} from '../db/data';

export function getProductById(id) {
    const product = products.find((p) => p.id === parseInt(id));
    return product;
  }

  export function exportProducts() {
    return products;
  }
  let categories = [...new Set(products.map(p=>p.category))];

  
export function exportCategories() {
    return categories;
>>>>>>> 78ef44e09afa2a867a52a71d0ba124618848776f
}