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
            <h1 className='text-center mt-4 underline'>Courbes actuelles</h1>
            <div className='d-flex flex-row flex-wrap justify-content-around'>
                {quotations.map((curr) => (
                    <div className='mt-3 col-md-6 col-9'>
                      <CurrCard name={curr.name} logo={curr.logo} quotations={curr.quotations} code={curr.code} id={curr.id} />
                    </div>
                  ))
                }
            </div>
        </div>
    </div>
  )
}

export default Currencies