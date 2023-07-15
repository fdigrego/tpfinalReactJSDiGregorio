import { useState } from "react"
const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial)

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }
  }

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1)
    }
  }

  return (
    <div className="flex justify-center mb-2">
      <button className="btn btn-outline btn-warning" onClick={decrementar}>
        {" - "}
      </button>
      <p className="btn btn-ghost text-blue-900 font-bold">{contador}</p>
      <button
        className="btn btn-outline btn-warning mr-1"
        onClick={incrementar}
      >
        {" + "}
      </button>
      <button
        className="btn btn-outline btn-success mb-3"
        onClick={() => funcionAgregar(contador)}
      >
        Agregar al Carrito
      </button>
    </div>
  )
}

export default ItemCount
