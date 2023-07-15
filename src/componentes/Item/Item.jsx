import { Link } from "react-router-dom"

const Item = ({ id, idCat, nombre, precio, img, stock }) => {
  return (
    <div className="ml-4 card card-bordered card-normal bg-slate-700 shadow-xl items-center m-2">
      <img className="w-32 rounded-full mt-3" src={img} alt={nombre} />
      <div className="card-body">
        <h3 className="font-bold text-l text-gray-200 mb-2">{nombre} </h3>
        <p className="text-base text-gray-400"> Precio: $ {precio} </p>
        <p className="text-base text-gray-400"> Seccion: {idCat} </p>
        <p className="text-base text-gray-400"> ID: {id} </p>
        <p className="text-base text-gray-400">Stock: {stock} </p>
        <div className="grid justify-items-center px-4 pt-2">
          <Link to={`/item/${id}`}>
            <button className="btn btn-sm btn-outline btn-warning mb-2">
              Ver Detalles
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Item
