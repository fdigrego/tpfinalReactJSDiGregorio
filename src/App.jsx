import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./componentes/NavBar/NavBar"
import { CartProvider } from "./context/CartContext"
import Cart from "./componentes/Cart/Cart"
import Checkout from "./componentes/Checkout/Checkout"

function App() {
  return (
    <>
      <div>
        <h1 className="text-xl text-green-900 font-bold p-4">
          ReactJS: carpeta con TPFinal.
        </h1>
        <BrowserRouter>
          <CartProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route
                path="/categoria/:idCategoria"
                element={<ItemListContainer />}
              />
              <Route path="/item/:idItem" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </CartProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
