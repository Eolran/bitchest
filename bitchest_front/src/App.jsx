import { Routes, Route } from "react-router-dom";

import './assets/App.css'

import Home from "./pages/Home";
import Login from "./pages/Login";
import Currencies from "./pages/charts/Currencies";
import Currency from "./pages/charts/Currency";
import Wallet from "./pages/Wallet";
import Dashboard from "./pages/admin/Dashboard";


function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Login />} />
        <Route path='/wallet' element={<Wallet />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path="/charts">
          <Route index element={<Currencies />} />
          <Route path=":id" element={<Currency />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
