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
}