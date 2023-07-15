import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"

const Checkout = () => {
  const { carrito, vaciarCarrito, cantidadTotal, total } =
    useContext(CartContext)
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [telefono, setTelefono] = useState("")
  const [email, setEmail] = useState("")
  const [emailConfirmacion, setEmailConfirmacion] = useState("")
  const [error, setError] = useState("")
  const [orderId, setOrderId] = useState("")

  const manejadorFormulario = (e) => {
    e.preventDefault()
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Todos los campos son obligatorios")
      return
    }
    if (email !== emailConfirmacion) {
      setError("Los emails no coinciden")
      return
    }
    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: cantidadTotal,
      nombre,
      apellido,
      telefono,
      email,
      fecha: new Date(),
    }

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "inventario", productoOrden.id)
        const productoDoc = await getDoc(productoRef)
        const stockActual = productoDoc.data().stock
        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        })
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docref) => {
            setOrderId(docref.id)
            vaciarCarrito()
          })
          .catch((error) => {
            console.log("Error al crear la orden", error)
            setError("Error orden creation")
            return
          })
      })
      .catch((error) => {
        console.log("Error al actualizar el stock", error)
        setError("Error on stock update")
        return
      })
  }

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={manejadorFormulario}>
        {carrito.map((producto) => (
          <div key={producto.id}>
            <p>
              {producto.item.nombre} * {producto.cantidad}
            </p>
            <p>Precio $ {producto.item.precio}</p>
            <hr />
          </div>
        ))}
        <hr />
        <div>
          <label htmlFor="nombre"> Nombre </label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="apellido"> Apellido </label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="telefono"> Teléfono </label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email"> Email </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="emailConfirmacion"> Email Confirmación </label>
          <input
            type="email"
            value={emailConfirmacion}
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}> {error} </p>}
        <button type="submit"> Finalizar Compra </button>
      </form>
      {orderId && (
        <strong>
          ¡Gracias por tu compra! La identificación de tu orden es: {orderId}
        </strong>
      )}
    </div>
  )
}

export default Checkout