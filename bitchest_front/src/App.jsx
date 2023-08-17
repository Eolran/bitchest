import { Routes, Route } from "react-router-dom";
import './assets/App.css'
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Currencies from "./pages/Currencies";
import Wallet from "./pages/Wallet";


function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/wallet' element={<Wallet />} />
        {/* <Route path="/charts">
          <Route index element={<Currencies />} />
          <Route path=":slug" element={<Currency />} />
        </Route> */}
      </Routes>
    </>
  )
}

export default App
