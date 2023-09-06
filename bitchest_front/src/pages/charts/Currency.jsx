import '../../assets/App.css'

import Sidebar from "../../components/Sidebar";
import Infobar from "../../components/Infobar";
import axios from 'axios';

import { useState, useEffect } from 'react';

async function getCurrency() {
    return await axios.get('http://localhost:8000/api/currencies/'+window.location.href.split('/').pop())
}

function Currency() {
  const [currency, setCurrency] = useState([]);
  useEffect(() => {
    getCurrency().then((res) => {
      setCurrency(res.data);
    });
  }, []);

  return (
    <div className='d-flex flex-row w-100vw'>
        <Sidebar />
        <div className='w-100'>
            <Infobar />
            <h1>{currency.name}</h1>

            <span>Mettre une charte plus grande de la currency actuelle</span>
        </div>
    </div>
  )
}

export default Currency