import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const user = JSON.parse(localStorage.getItem("user"));

  const getKey = (item) => item.id || item._id;

  // localStorage load (user-wise)
  const [cartItems, setCartItems] = useState(() => {
    if (!user) return [];

    const savedCart = localStorage.getItem(`cart_${user._id}`);
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // ADD TO CART
  const addToCart = (item) => {
    const key = getKey(item);

    setCartItems((prev) => {
      const existing = prev.find((p) => p.cartKey === key);

      if (existing) {
        return prev.map((p) =>
          p.cartKey === key
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }

      return [...prev, { ...item, quantity: 1, cartKey: key }];
    });
  };

  // DECREASE QTY
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.cartKey === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // REMOVE ITEM
  const removeFromCart = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.cartKey !== id)
    );
  };

  // CLEAR CART
  const clearcart = () => {
    setCartItems([]);

    if (user) {
      localStorage.removeItem(`cart_${user._id}`);
    }
  };

  // SAVE TO LOCALSTORAGE
  useEffect(() => {
    if (user) {
      localStorage.setItem(
        `cart_${user._id}`,
        JSON.stringify(cartItems)
      );
    }
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQty,
        removeFromCart,
        clearcart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);