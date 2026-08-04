import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: any) => {
    const [cart, setCart] = useState<any[]>(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });
    function removeFromCart(productId: any) {
        setCart((prevCart: any[]) => prevCart.filter((item: any) => item.id !== productId));
    }

    function clearCart() {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);



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
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
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