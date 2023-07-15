import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/config"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null)
  const { idItem } = useParams()

  useEffect(() => {
    const nuevoDoc = doc(db, "inventario", idItem)
    getDoc(nuevoDoc)
      .then((res) => {
        const data = res.data()
        const nuevoProducto = { id: res.id, ...data }
        setProducto(nuevoProducto)
      })
      .catch((error) => console.log(error))
  }, [idItem])

  return (
    <div>
      <h2 className="ml-6 mt-2 mb-4 text-l text-thin">
        Renderizado de UN SOLO producto
      </h2>
      <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer
