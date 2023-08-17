import '../assets/App.css'

import Sidebar from "../components/Sidebar";
import Infobar from "../components/Infobar";

import CheckXSRF from "../services/secure";

function Home() {
    CheckXSRF()
  return (
    <div className='d-flex flex-row'>
        <Sidebar />
        <div>
            <Infobar />
            Créer un tableau avec le une entrée par user qui possède le plus de crypto-monnaie (10 entrées max) (clic sur le nom pour afficher le portefeuille complet du user)
        </div>
    </div>
  )
}

export default Home