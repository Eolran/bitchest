import '../../assets/App.css'

import Sidebar from "../../components/Sidebar";
import { useState, useEffect } from 'react';

import { getUsers } from '../../services/api.service';
import axios from 'axios';

async function getUser() {
  axios.defaults.withCredentials = true;
    const response = await axios.get('http://localhost:8000/api/user')
    return response.data
}

function Dashboard() {

  const [user, setUser] = useState({});
  useEffect(() => {
    getUser().then((res) => {
        setUser(res);
    }
    );
  }, []);
  
useEffect(() => {
  if (user?.admin_state == 0) {
    window.location.href = '/home';
  }
}, [user]);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((res) => {
        setUsers(res);
    });
  }, []);

  return (
    <div className='d-flex flex-row w-100vw'>
        <Sidebar />
        <div className='w-100 screenHeight'>
            <div className='mt-3'>
              <table>
                <tbody>
                  <tr>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Dollar count</th>
                    <th>Admin state</th>
                    <th>Actions</th>
                  </tr>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.dollars_wallet} $</td>
                    <td>{user.admin_state == 1 ? "Administrateur" : "Utilisateur"}</td>
                    <td>
                        <button className='btn btn-primary'>Modifier</button>
                        <button className='btn btn-danger'>Supprimer</button>
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>

              <button>Créer un utilisateur</button>
            </div>
        </div>
    </div>
  )
}

export default Dashboard