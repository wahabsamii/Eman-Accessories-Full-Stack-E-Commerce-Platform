import { useState, useContext, createContext, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const existingCartItem = localStorage.getItem("cart");

    if (existingCartItem) {
      setCart(JSON.parse(existingCartItem));
    }
  }, []);

  // Add product to cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem._id === item._id
      );

      let updatedCart;

      if (existingItem) {
        // Increase quantity if product already exists
        updatedCart = prevCart.map((cartItem) =>
          cartItem._id === item._id
            ? {
                ...cartItem,
                quantity: (cartItem.quantity || 1) + 1,
              }
            : cartItem
        );
      } else {
        updatedCart = [
          ...prevCart,
          {
            ...item,
            quantity: 1,
          },
        ];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return updatedCart;
    });
  };

  return (
    <CartContext.Provider
      value={[
        cart,
        setCart,
        addToCart,
      ]}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
