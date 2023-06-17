import React from "react";

export const ProductContext = React.createContext()

export function ProductProvider ({children}) {
    let [name, setName] = React.useState("Shoes")
    let [price, setPrice] = React.useState("30$");

    const addProduct = (name, price) => {
        setName(name)
        setPrice(price)
    }
    const deleteProduct = () => {
        setName(null)
        setPrice(null)
    }

    return(
        <ProductContext.Provider value={{name, price, addProduct, deleteProduct }}>
            {children}
        </ProductContext.Provider>
    )

}