import axios from "axios";

export const handleLogout = async (e) => {
    e.preventDefault()
    console.log('logout')
    axios.defaults.withCredentials = true;
    await axios.get('http://localhost:8000/sanctum/csrf-cookie');
    const response = await axios.post('http://localhost:8000/logout');
    if (response.status === 204) {
        localStorage.removeItem('user')
        window.location.href = 'http://localhost:5173/'
    } else {
        alert('Erreur lors de la déconnexion')
    }
}

export default async function getCurrencies() {
    axios.defaults.withCredentials = true;
    const response = await axios.get('http://localhost:8000/api/currencies')
    return response.data
}

export async function getQuotations() {
    axios.defaults.withCredentials = true;
    const response = await axios.get('http://localhost:8000/api/quotations')
    return response.data
}

export async function getUsers() {
    axios.defaults.withCredentials = true;
    const response = await axios.get('http://localhost:8000/api/users');

    if (response.status !== 200) {
        window.location.href = 'http://localhost:5173/login'
    } else {
        return response.data
    }
}

export async function postBuy(body) {
    const response = await axios.post('', body)
    return response.data
}