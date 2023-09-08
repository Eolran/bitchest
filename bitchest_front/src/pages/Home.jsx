import '../assets/App.css'

import Sidebar from "../components/Sidebar";

import { useState, useEffect } from 'react';
import getCurrencies from '../services/api.service';
import getUser from '../services/secure';

function Home() {
  const [currencies, setCurrencies] = useState([]);
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   getUsers().then((res) => {
  //     setUsers(res);
  //   });
  // }, []);
  useEffect(() => {
    getCurrencies().then((res) => {
      setCurrencies(res);
    });
  }, []);

  return (
    <div className='d-flex flex-row w-100vw'>
        <Sidebar />
        <div className='w-100 screenHeight'>
            <div className='mt-3'>
              <ul>
                {/* {users.forEach(user => {
                  <li>{user.name} a le plus de {currencies[0].name}</li>
                })} */}
              </ul>
            </div>
            Créer un tableau avec une entrée par user qui possède le plus de crypto-monnaie (10 entrées max) (clic sur le nom pour afficher le portefeuille complet du user)
        </div>
    </div>
  )
}

export default Home