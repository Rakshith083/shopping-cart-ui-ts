import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartDropdown() {
    const { cart: cartItems, removeFromCart, clearCart } = useContext(CartContext);
    const totalPrice = cartItems.reduce((total: number, item: any) => total + item.price * item.quantity, 0).toFixed(2);
    return (
        <div className="absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-50">
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h2 className="text-gray-500 font-semibold text-md">{cartItems.length > 0 ? "Cart Items" : "No items"}</h2>
                    </div>
                </div>
                {
                    cartItems.length > 0 && (
                        <>
                            <ul className="mt-4 max-h-60 overflow-y-auto devide-y divide-gray-200">
                                {cartItems.map((item: any) => (
                                    <li key={item.id} className="flex items-center justify-between py-2">
                                        <div>
                                            <span className="font-semibold text-2xl">{item.name}</span>
                                            <p className="text-gray-500 text-xl">{item.quantity} x ${item.price.toFixed(2)}</p>
                                        </div>
                                        <button className="text-red-500 hover:text-red-700 hover:underline text-sm ml-4" onClick={() => removeFromCart(item.id)}>
                                            Remove
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <p className=" mt-4 text-lg font-bold">Total Price: ${totalPrice}</p>
                            <button className="text-xl mx-auto mt-3 w-full items-center text-white bg-red-500 hover:bg-red-700 p-2 transition duration-200 rounded shadow-lg" onClick={clearCart}>
                                Clear Cart
                            </button>
                        </>
                    )
                }

            </div>
        </div>
    );
}