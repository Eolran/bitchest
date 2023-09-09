import '../assets/App.css'
import { useState } from 'react'
import axios from 'axios'
import { Button, Form } from 'react-bootstrap';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('login')

    axios.defaults.withCredentials = true;
    await axios.get('http://localhost:8000/sanctum/csrf-cookie');
    try {
      const response = await axios.post('http://localhost:8000/login', {
      headers: { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*' 
      },
      email: login,
      password: password
    });

    if (response.status === 202) {
      localStorage.setItem('user', JSON.stringify(response.data.user))
      window.location.href = 'http://localhost:5173/home'
    }
      
    } catch (error) {
      console.error(error);
      alert('Erreur lors de la connexion')
    }
  }

  return (
    <div className='d-flex justify-content-center align-items-center pt-5 '>
      <div className='border-top border-bottom border-3 border-black p-4'>
        <h1>Connexion</h1>
        <Form method="post" onSubmit={handleSubmit}>
        <img src="/assets/bitchest_logo.png" alt="bit_logo" width="250px" />
          <Form.Group className="mb-3" controlId="login">
            <Form.Label className='underline bold'>Adresse Mail</Form.Label>
            <Form.Control type="email" placeholder="Email" onChange={(e)=>{setLogin(e.target.value)}} />
            <Form.Text className="text-muted">
              Nous ne partagerons jamais votre adresse mail avec un service tier.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label className='underline bold'>Mot de passe</Form.Label>
            <Form.Control type="password" placeholder="Mot de passe" onChange={(e)=>{setPassword(e.target.value)}} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Connexion
          </Button>
        </Form>
        {/* <img src="/assets/bitchest_logo.png" alt="bit_logo" width="250px" />
        <form method="post" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" name="" id="login" onChange={(e)=>{setLogin(e.target.value)}} />
            <h2>Password</h2>
            <input type="password" name="" id="password" onChange={(e)=>{setPassword(e.target.value)}} />

            <button type="submit">Login</button>
        </form> */}
      </div>
    </div>
  )
}

export default Login