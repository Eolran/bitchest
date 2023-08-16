import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import './assets/App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App