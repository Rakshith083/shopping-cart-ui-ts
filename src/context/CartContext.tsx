import { createContext, useState, useContext } from "react";

export const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: any) => {
    const [cart, setCart] = useState([]);
    return (
        <CartContext.Provider value={{ cart }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCartContext must be used within a CartProvider");
    }
    return context;
}