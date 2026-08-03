// import { useContext } from "react";
import ProductCard from "./ProductCard";
import { useProductContext } from "../context/ProductContext";
import { BeatLoader } from "react-spinners";
// import { ProductContext } from "../context/ProductContext";
useProductContext


export default function ProductList() {
    const { products, error, isLoading } = useProductContext();

    return (
        <div>
            {isLoading && (
                <div className="flex justify-center items-center h-screen">
                    <BeatLoader color="#36d7b7" />
                </div>
            )}
            {error && <p>{error}</p>}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-4">
                {products.map((p: any) => (
                    <ProductCard key={p.id} product={p}></ProductCard>
                ))}
            </div>
        </div>
    );
}