import '../../assets/App.css'

import Sidebar from "../../components/Sidebar";
import CurrCard from '../../components/CurrCard';
import { useState, useEffect } from 'react';

import { getQuotations } from '../../services/api.service';


function Currencies() {
  const [quotations, setQuotations] = useState([]);
  useEffect(() => {
    getQuotations().then((res) => {
      setQuotations(res);
    });
  }, []);

  return (
    <div className='d-flex flex-row w-100vw'>
        <Sidebar />
        <div className='w-100 ps-4'>
            <h1 className='text-center'>Currencies charts</h1>
            <div className='d-flex flex-row flex-wrap justify-content-around'>
              {quotations.map((curr) => (
                  <CurrCard name={curr.name} logo={curr.logo} quotations={curr.quotations} code={curr.code} id={curr.id} />
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default Currencies