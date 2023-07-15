import "./CartWidget.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext)

  const imgDelCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png"
  return (
    <Link to="/cart">
      <div className="flex flex-row mr-4">
        <img
          className="imgCarrito"
          src={imgDelCarrito}
          alt="carrito de compras"
        />
        {cantidadTotal > 0 && (
          <strong className="bg-yellow-300 outline outline-1 shadow-md rounded-full py-2 px-2 text-sm text-blue-900 hover:text-blue-950 hover:bg-green-400 -mt-3 -ml-4 mb-8">
            {cantidadTotal}
          </strong>
        )}
      </div>
    </Link>
  )
}

export default CartWidget
