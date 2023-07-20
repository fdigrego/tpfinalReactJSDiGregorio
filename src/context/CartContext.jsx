import { useState, createContext } from "react"
export const CartContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
})

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState(0)
  const [cantidadTotal, setCantidadTotal] = useState(0)

  const agregarProducto = (item, cantidad) => {
    const productoExistente = carrito.find((prod) => prod.item.id === item.id)
    if (!productoExistente) {
      setCarrito((prev) => [...prev, { item, cantidad }])
      setTotal((prev) => prev + item.precio * cantidad)
      setCantidadTotal((prev) => prev + cantidad)
    } else {
      const carritoActualizado = carrito.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad }
        } else {
          return prod
        }
      })
      setCarrito(carritoActualizado)
      setTotal((prev) => prev + item.precio * cantidad)
      setCantidadTotal((prev) => prev + cantidad)
    }
  }
  const eliminarProducto = (id) => {
    const productoEliminado = carrito.find((prod) => prod.item.id === id)
    const carritoActualizado = carrito.filter((prod) => prod.item.id !== id)
    setCarrito(carritoActualizado)
    setTotal(
      (prev) =>
        prev - productoEliminado.item.precio * productoEliminado.cantidad
    )
    setCantidadTotal((prev) => prev - productoEliminado.cantidad)
  }
  const vaciarCarrito = () => {
    setCarrito([])
    setTotal(0)
    setCantidadTotal(0)
  }
  return (
    <CartContext.Provider
      value={{
        carrito,
        total,
        cantidadTotal,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
