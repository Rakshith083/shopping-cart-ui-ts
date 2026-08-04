import { createContext, useState, useContext } from "react";

export const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: any) => {
    const [cart, setCart] = useState<any[]>([]);

    const addToCart = (product: any) => {
        // const existing = cart.find((item: any) => item.id === product.id);
        setCart((prevCart: any[]) => {
            const existing = prevCart.find((item: any) => item.id === product.id);
            if (existing) {
                return prevCart.map((item: any) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
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