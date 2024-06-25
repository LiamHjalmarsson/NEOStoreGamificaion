import { createContext, useState, useEffect, useContext } from 'react'
import { toast } from "react-toastify";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    let [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);

    let addToCart = (item) => {
        let isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id);

        if (isItemInCart) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem._id === item._id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }

        toast.success(`Added ${item.title} to cart`);
    };

    let removeFromCart = (item) => {
        let isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id);

        if (isItemInCart.quantity === 1) {
            setCartItems(cartItems.filter((cartItem) => cartItem._id !== item._id));
        } else {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem._id === item._id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
                )
            );
        }
    };

    let clearCart = () => {
        setCartItems([]);
    };

    let getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    let getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0)
    }

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));

    }, [cartItems]);

    useEffect(() => {
        let cartItems = localStorage.getItem("cartItems");
        if (cartItems) {
            setCartItems(JSON.parse(cartItems));
        }
    }, []);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                clearCart,
                getCartTotal,
                getTotalItems
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);
