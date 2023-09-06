import axios from 'axios'

async function getUser() {
    axios.defaults.withCredentials = true;
    const response = await axios.get('http://localhost:8000/api/user');

    if (response.status !== 200) {
        window.location.href = 'http://localhost:5173/login'
    } else {
        return "ok"
    }
}

export default getUser;