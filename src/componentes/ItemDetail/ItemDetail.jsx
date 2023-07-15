import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0)
  const { agregarProducto } = useContext(CartContext)
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad)
    console.log("Productos agregados " + cantidad)
    const item = { id, nombre, precio }
    agregarProducto(item, cantidad)
  }

  return (
    <div className="ml-6 max-w-sm rounded-lg overflow-hidden shadow-xl">
      <img src={img} alt={nombre} className="w-full" />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl text-blue-900 mb-2">{nombre}</h2>
        <p className="text-gray-700 text-xs">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, iusto
          illum odit omnis error dolorem ducimus maxime voluptates voluptate
          sequi fuga nam deserunt beatae officia officiis culpa porro
          aspernatur! Consequatur fugit ea amet voluptatem sunt laudantium
          veritatis doloribus porro dolorum.
        </p>
      </div>
      <div className="flex justify-evenly px-6 pb-4">
        <h3 className="btn btn-outline">ID Item: {id}</h3>
        <h3 className="btn btn-outline">Stock: {stock}</h3>
        <h3 className="btn btn-outline">$: {precio}</h3>
      </div>

      {agregarCantidad > 0 ? (
        <div className="flex justify-center">
          <Link className="btn btn-outline btn-success mb-4 mr-2" to={"/"}>
            Comprar más
          </Link>
          <Link className="btn btn-outline btn-primary mb-4" to={"/cart"}>
            Terminar Compra
          </Link>
        </div>
      ) : (
        <ItemCount
          inicial={1}
          stock={stock}
          funcionAgregar={manejadorCantidad}
        />
      )}
    </div>
  )
}

export default ItemDetail
