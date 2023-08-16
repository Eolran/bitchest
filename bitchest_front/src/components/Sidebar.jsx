import '../assets/App.css'
import '../assets/Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
        <img src="/assets/bitchest_logo.png" alt="" />
        <h1>Bonjour "User"</h1>
        <ul>
            <li><p>Votre solde : xxx,xx</p></li>
            <li><a href="">Votre portefeuille</a></li>
            <li><a href="">Déconnexion</a></li>
        </ul>
    </div>
  )
}

export default Sidebar