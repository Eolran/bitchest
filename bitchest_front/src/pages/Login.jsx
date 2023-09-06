import '../assets/App.css'
import { useState } from 'react'
import axios from 'axios'

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('login')

    axios.defaults.withCredentials = true;
    await axios.get('http://localhost:8000/sanctum/csrf-cookie');
    const response = await axios.post('http://localhost:8000/login', {
      email: login,
      password: password
    });

    if (response.status === 202) {
      localStorage.setItem('user', JSON.stringify(response.data.user))
      window.location.href = 'http://localhost:5173/home'
    } else {
      alert('Erreur lors de la connexion')
    }
  }

  return (
    <div>
        <img src="/assets/bitchest_logo.png" alt="bit_logo" width="250px" />
        <form method="post" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" name="" id="login" onChange={(e)=>{setLogin(e.target.value)}} />
            <h2>Password</h2>
            <input type="password" name="" id="password" onChange={(e)=>{setPassword(e.target.value)}} />

            <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login