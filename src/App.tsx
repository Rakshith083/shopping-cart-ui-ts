// import { useContext } from "react"
import ProductList from "./components/ProductList";
// import { BeatLoader } from "react-spinners";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function App() {

  // flex items-center gap-2 text-gray-800 font-semibold text-4xl
  return <>
    <div className="flex items-center gap-4 text-gray-800 font-semibold text-4xl mb-4">
      <AiOutlineShoppingCart />
      <h2>Product Catalog</h2>
    </div>
    <ProductList />
  </>
}