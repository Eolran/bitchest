import '../assets/App.css'
import '../assets/Sidebar.css'
import {handleLogout} from '../services/api.service'
import getUser from '../services/secure'

function Sidebar() {
    const user = JSON.parse(localStorage.getItem('user'));
    return (
        <div className='sidebar'>
            <div className='insideSidebar'>
                <img src="/assets/bitchest_logo.png" alt="" />
                <h1>Bonjour {user.name}</h1>
                <ul>
                    <li><p>Votre solde : ${user.dollars_wallet}</p></li>
                    <li><a href="/wallet">Votre portefeuille</a></li>
                    <li><button onClick={handleLogout}>Déconnexion</button></li>
                </ul>
            </div>
        </div>
      )
}

export default Sidebar