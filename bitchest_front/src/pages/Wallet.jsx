import '../assets/App.css'

import Sidebar from "../components/Sidebar";
import Infobar from "../components/Infobar";

function Wallet() {
  return (
    <div className='d-flex flex-row'>
        <Sidebar />
        <div>
            <Infobar />
            Page portefeuille
        </div>
    </div>
  )
}

export default Wallet