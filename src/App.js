import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AllProducts from "./pages/AllProducts"
import OneProduct from "./pages/OneProduct"
import Form from "./pages/Form"
import SharedLayout from "./pages/SharedLayout"

const App = () => {
  return <BrowserRouter>
        <Routes>
          <Route path="/" element={ <SharedLayout /> } >
          <Route index element={ <Home /> } />
          <Route path="all-products" element={ <AllProducts /> } />
          <Route path="form" element={ <Form /> } />
          <Route path="one-product/:productId" element={ <OneProduct /> } />
          </Route>

    

        </Routes>
  </BrowserRouter>
}

export default App