import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CartContext)
  if (cantidadTotal === 0) {
    return (
      <div className="pl-6 mt-4 text-green-900 text-xl font-bold">
        <h2>Carrito sin productos</h2>
        <Link className="mt-3 btn btn-outline" to="/">
          Ver Productos
        </Link>
      </div>
    )
  }
  return (
    <div>
      {carrito.map((producto) => (
        <CartItem key={producto.id} {...producto} />
      ))}
      <h3>Total: $ {total}</h3>
      <h3>Cantidad Total: {cantidadTotal} </h3>
      <button onClick={() => vaciarCarrito()}>vaciar carrito</button>
      <Link to="/checkout">Finalizar Compra</Link>
    </div>
  )
}

export default Cart
