import React, { createContext, useState } from "react";
import all_products from "../components/Assets/all_product";

// Create the context
export const ShopContext = createContext(null);

// Function to initialize cart with zeros for each product
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  // State for cart items, initially with default cart
  const [cartItems, setCartItems] = useState(getDefaultCart());
  // State for the logged-in user
  const [user, setUser] = useState(null);

  // Add an item to the cart
  const addToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };

  // Remove an item from the cart
  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  // Calculate total cart amount based on product prices and quantities
  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }

    // // Add shipping charges if totalAmount is less than a specific value (e.g., 500)
    // if (totalAmount > 0 && totalAmount < 500) {
    //   totalAmount += 100; // Add shipping charges
    // }

    return totalAmount;
  };

  // Get total number of items in the cart
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  // Login function to set user data
  const login = (userData) => {
    setUser(userData); // Set user data after successful login/signup
  };

  // Logout function to clear user data
  const logout = () => {
    setUser(null); // Clear user data on logout
  };

  // Providing the context value
  const contextValue = {
    all_products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    user,
    login,
    logout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
