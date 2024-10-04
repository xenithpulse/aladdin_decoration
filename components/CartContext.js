import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);
  
  useEffect(() => {
    if (cartProducts.length > 0) {
      ls.setItem('cart', JSON.stringify(cartProducts));
    }
  }, [cartProducts, ls]); // Added 'ls' as a dependency
  
  useEffect(() => {
    if (ls && ls.getItem('cart')) {
      const storedCart = JSON.parse(ls.getItem('cart'));
      setCartProducts(storedCart || []); // Ensure it's set to an empty array if null
    }
  }, [ls]); // Added 'ls' as a dependency
  


const addProduct = (productId, selectedOptions) => {
  if (productId && typeof productId === "string") {
    setCartProducts(prev => {
      const existingProductIndex = prev.findIndex(item => 
        item.productId === productId && JSON.stringify(item.selectedOptions) === JSON.stringify(selectedOptions)
      );

      if (existingProductIndex > -1) {
        return prev.map((item, index) =>
          index === existingProductIndex
            ? {
                ...item,
                quantity: (item.quantity || 1) + 1
              }
            : item
        );
      }

      return [...prev, { productId, selectedOptions, quantity: 1 }];
    });
  } else {
    console.error("Invalid productId provided:", productId);
  }
};

const removeProduct = (productId, selectedOptions) => {
  if (productId && typeof productId === "string") {
    setCartProducts(prev => {
      const existingProductIndex = prev.findIndex(item => 
        item.productId === productId && JSON.stringify(item.selectedOptions) === JSON.stringify(selectedOptions)
      );

      if (existingProductIndex > -1) {
        const currentItem = prev[existingProductIndex];
        if (currentItem.quantity > 1) {
          return prev.map((item, index) =>
            index === existingProductIndex
              ? {
                  ...item,
                  quantity: currentItem.quantity - 1
                }
              : item
          );
        } else {
          return prev.filter((item, index) => index !== existingProductIndex);
        }
      } else {
        console.error("Product not found in cart for productId:", productId);
        return prev; // No changes if product not found
      }
    });
  } else {
    console.error("Invalid productId provided:", productId);
  }
};

const clearCart = () => {
  console.log("Clearing cart"); // Log action
  setCartProducts([]); // Clear state
  if (ls) {
    ls.removeItem('cart'); // Clear local storage
  }
};



  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct, removeProduct, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
