import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto } = useContext(CartContext)
  return (
    <div className="grid grid-cols-4 pl-6">
      <p> {item.nombre} </p>
      <p>Cantidad: {cantidad}</p>
      <p>Precio: {item.precio}</p>
      <button onClick={() => eliminarProducto(item.id)}>
        Eliminar artículo
      </button>
      <hr />
    </div>
  )
}

export default CartItem
