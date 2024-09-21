import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';


// Function to create a default cart object
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
        cart[index] = 0;
    } 
    return cart;
};

// Creating the context
export const ShopContext = createContext();

// Provider component
const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Function to add an item to the cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    // Function to remove an item from the cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    // Function to calculate total cart amount
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };

    // Function to get total items in the cart
    const getTotalCartItem = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    // Defining the context value
    const contextValue = { 
        getTotalCartItem, 
        getTotalCartAmount, 
        all_product, 
        cartItems, 
        addToCart, 
        removeFromCart 
    };

    // Returning the provider with the context value
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children} {}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
