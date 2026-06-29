import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();   //empty bag 

export const CartProvider = ({ children }) => {

  //local storage logic 
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  //add tcart logic 
  const addToCart = (item) => {
    setCartItems((prev) => {
      const exisiting = prev.find((p) => p.id === item.id);

      if (exisiting) {
        return prev.map((p) =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  //remove cart logic 
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const clearcart = () => {
    setCartItems([]);
  }
  // 💾 localStorage save (simple way same like yours)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <CartContext.Provider value={{ cartItems, addToCart, decreaseQty, removeFromCart, clearcart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);