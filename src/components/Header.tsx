import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { AiOutlineShopping, AiOutlineShoppingCart } from "react-icons/ai";
import CartDropdown from "./CartDropdown";

export default function Header() {
    const [showDropDown, setShowDropdown] = useState(false);
    const { cart: cartItems } = useContext(CartContext);
    const cartCount = cartItems.reduce((total: number, item: any) => total + item.quantity, 0);

    return (
        <header className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center gap-4 text-gray-800 font-semibold text-4xl mb-4">
                <AiOutlineShopping />
                <h2>Shopify</h2>
            </div>

            <div className="relative flex items-center gap-2 text-3xl">
                <button className="cursor-pointer" onClick={() => setShowDropdown(!showDropDown)}>
                    <AiOutlineShoppingCart className="text-3xl" />
                    {cartCount > 0 && (
                        <span className="absolute -top-2 -right-2 flex items-center justify-center min-w-5 h-5 px-1 text-sm font-semibold bg-red-500 text-white rounded-full">
                            {cartCount}
                        </span>
                    )}
                </button>
                {showDropDown && (
                    <div className="absolute top-full right-0 mt-2 z-10">
                        <CartDropdown />
                    </div>
                )}
            </div>

        </header>
    );
}