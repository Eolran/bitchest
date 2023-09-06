import '../../assets/App.css'

import Sidebar from "../../components/Sidebar";
import Infobar from "../../components/Infobar";
import CurrCard from '../../components/CurrCard';
import { useState, useEffect } from 'react';

import getCurrencies from '../../services/api.service';

function Currencies() {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    getCurrencies().then((res) => {
      setCurrencies(res);
    });
  }, []);

  return (
    <div className='d-flex flex-row w-100vw'>
        <Sidebar />
        <div className='w-100'>
            <Infobar />
            <h1 className='text-center'>Currencies charts</h1>
            <div className='d-flex flex-row flex-wrap justify-content-around'>
              {currencies.map((curr) => (
                  <CurrCard name={curr.name} />
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Currencies