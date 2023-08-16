import '../assets/App.css'

import Sidebar from "../components/Sidebar";
import Infobar from "../components/Infobar";

function Home() {
  return (
    <div className='d-flex flex-row'>
        <Sidebar />
        <div>
            <Infobar />
        </div>
    </div>
  )
}

export default Home