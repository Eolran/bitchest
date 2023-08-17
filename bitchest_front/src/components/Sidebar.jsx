import axios from 'axios'
import '../assets/App.css'
import '../assets/Sidebar.css'
import handleLogout from '../services/api.service'

function Sidebar() {
    const user = JSON.parse(localStorage.getItem('user'))
    if (!user) {
        window.location.href = 'http://localhost:5173/login'
    }

    return (
        <div className='sidebar'>
            <img src="/assets/bitchest_logo.png" alt="" />
            <h1>Bonjour {user.name}</h1>
            <ul>
                <li><p>Votre solde : xxx,xx</p></li>
                <li><a href="/wallet">Votre portefeuille</a></li>
                <li><button onClick={handleLogout}>Déconnexion</button></li>
            </ul>
        </div>
      )
}

export default Sidebar