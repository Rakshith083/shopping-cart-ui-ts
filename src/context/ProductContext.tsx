import { createContext, useContext, useEffect, useState } from "react";

export const ProductContext = createContext<any>(null);

export const ProductProvider = ({ children }: any) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const url = `/api/products`;
                const resp = await fetch(url);
                if (!resp.ok) {
                    throw new Error("Failed to fetch products")
                }
                const prd_data = await resp.json();
                setProducts(prd_data);
            }
            catch (e: any) {
                setError(e.message)
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchProducts();
    }, []);
    return (
        <ProductContext.Provider value={{ products, isLoading, error }}>
            {children}
        </ProductContext.Provider>
    )
}

export function useProductContext() {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProductContext must be used within a ProductProvider");
    }
    return context;
}
