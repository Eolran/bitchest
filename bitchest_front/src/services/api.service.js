import axios from 'axios';

export const handleLogout = async (e) => {
    e.preventDefault()
    console.log('logout')
    axios.defaults.withCredentials = true;
    await axios.get('http://localhost:8000/sanctum/csrf-cookie');
    const response = await axios.post('http://localhost:8000/logout');
    if (response.status === 204) {
        localStorage.removeItem('user')
        window.location.href = 'http://localhost:5173/login'
    } else {
        alert('Erreur lors de la déconnexion')
    }
}

export default async function getCurrencies() {
    const response = await axios.get('http://localhost:8000/api/currencies')
    console.log(response.data)
    return response.data
}
