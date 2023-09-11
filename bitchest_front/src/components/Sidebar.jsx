import '../assets/App.css'
import '../assets/Sidebar.css'
import {handleLogout} from '../services/api.service'
import axios from 'axios';
import { useState, useEffect } from 'react';

function Sidebar() {

    const [user, setUser] = useState({});
    async function getUser() {
    axios.defaults.withCredentials = true;
        const response = await axios.get('http://localhost:8000/api/user')
        return response.data
    }

    useEffect(() => {
        getUser().then((res) => {
            setUser(res);
        }
        );
    }, []);


    return (
        <div className='sidebar col-lg-2 col-md-3 col-sm-5 d-sm-block d-none'>
            <div className='insideSidebar col-lg-2 col-md-3 col-sm-5'>
                <a href="/home"><img src="/assets/bitchest_logo.png" alt="" /></a>
                <h1 className='mb-4'>Bonjour {user.name}</h1>
                <ul className="list-unstyled">
                    <li><p>Votre solde : ${user.dollars_wallet}</p></li>
                    <li><a href="/wallet">Votre portefeuille</a></li>
                    <li><a href="/charts">Les courbes actuelles</a></li>
                    {user.admin_state == 1 ? <li><a href="/admin">Admin</a></li> : ''}
                    <li><button className='mt-5' onClick={handleLogout}>Déconnexion</button></li>
                </ul>
            </div>
        </div>
      )
}

export default Sidebar