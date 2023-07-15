import Item from "../Item/Item"

const ItemList = ({ productos }) => {
  return (
    <div className="flex flex-wrap rounded">
      {productos.map((prod) => (
        <Item key={prod.id} {...prod} />
      ))}
    </div>
  )
}

export default ItemList
