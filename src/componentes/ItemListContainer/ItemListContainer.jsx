import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../services/config"

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const { idCategoria } = useParams()

  useEffect(() => {
    const misProductos = idCategoria
      ? query(collection(db, "inventario"), where("idCat", "==", idCategoria))
      : collection(db, "inventario")

    getDocs(misProductos)
      .then((resp) => {
        const nuevosProductos = resp.docs.map((doc) => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProductos(nuevosProductos)
      })
      .catch((error) => console.log(error))
  }, [idCategoria])

  return (
    <div>
      <h2 className="pl-5 text-2xl font-thin text-blue-900">
        Productos Marolio
      </h2>
      <h3 className="pl-5 text-l font-thin ">
        <strong>Utilizamos: </strong>Item, ItemList e ItemListContainer, con un
        mock de datos local (con retraso simulado de 2segs)
      </h3>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer
