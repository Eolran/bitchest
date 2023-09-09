import '../../assets/App.css'
import { Button, Table } from 'react-bootstrap';
import FormModal from '../../components/FormModal';

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
  const [modalShow, setModalShow] = useState(false);
  const [status, setStatus] = useState("");
  const [username, setUserName] = useState("");
  const [userid, setUserId] = useState();
  const [email, setEmail] = useState("");
  const handleShow = () => setModalShow(true);

  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    getUser().then((res) => {
        setCurrentUser(res);
    }
    );
  }, []);

  const setModal = (status, user) => {
    if (user == undefined || user == {}) {
      setUserName("");
      setUserId("");
      setEmail("");
    } else {
      setUserName(user.name);
      setUserId(user.id);
      setEmail(user.email);
    }
    setStatus(status);
    handleShow();
  }
  
useEffect(() => {
  if (currentUser?.admin_state == 0) {
    window.location.href = '/home';
  }
}, [currentUser]);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((res) => {
        setUsers(res);
    });
  }, []);

  return (
    <div className='d-flex flex-row w-100vw'>
        <Sidebar />
        <div className='w-100 screenHeight ps-4'>
            <div className='mt-3'>
              <Table striped bordered hover>
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
                      {/* handleUpdate(user.id, data)  handleDelete(user.id)  handleCreate(data)*/}
                        <Button className='rounded-0 color-white border-0' style={{backgroundColor: "#1a1a1a"}} onClick={() => setModal("update", user)}>Modifier</Button>{' '}
                        <Button className='rounded-0' variant="danger" onClick={() => setModal("delete", user)}>Supprimer</Button>{' '}
                    </td>
                  </tr>
                ))}
                </tbody>
              </Table>

              <button onClick={() => setModal("create", {})}>Créer un utilisateur</button>
            </div>
        </div>

        <FormModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        state={status}
        username={username}
        userid={userid}
        email={email}
        />
    </div>
  )
}

export default Dashboard