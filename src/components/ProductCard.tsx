import { useCartContext } from "../context/CartContext";

export default function ProductCard(props: any) {
    const { product: p } = props;
    const { addToCart } = useCartContext();
    return <div>
        <div className="flex p-2 shadow-lg rounded-lg flex-col">
            <img className="h-40 object-cover rounded" src={p.image} alt={p.name} />
            <h2 className="font-semibold text-xl">{p.name}</h2>
            <p className="text-sm text-gray-00">{p.description}</p>
            <p className="text-lg font-semibold">${p.price}</p>
            <button onClick={() => addToCart(p)}
                className="bg-blue-600 
                    text-white 
                        w-full
                        text-2xl
                        px-4
                        py-2 
                        rounded 
                        mt-3 
                        transition 
                    hover:bg-blue-700">Add to Cart</button>
        </div>
    </div>
}