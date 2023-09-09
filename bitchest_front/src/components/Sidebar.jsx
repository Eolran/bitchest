import '../assets/App.css'
import '../assets/Sidebar.css'
import {handleLogout} from '../services/api.service'

function Sidebar() {

    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <div className='sidebar'>
            <div className='insideSidebar'>
                <a href="/home"><img src="/assets/bitchest_logo.png" alt="" /></a>
                <h1 className='mb-4'>Bonjour {user.name}</h1>
                <ul className="list-unstyled">
                    <li><p>Votre solde : ${user.dollars_wallet}</p></li>
                    <li><a href="/wallet">Votre portefeuille</a></li>
                    <li><a href="/charts">Les courbes actuelles</a></li>
                    <li><button className='mt-3' onClick={handleLogout}>Déconnexion</button></li>
                </ul>
            </div>
        </div>
      )
}

export default Sidebar