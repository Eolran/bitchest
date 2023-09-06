import React, { useState, useEffect } from 'react'
import '../assets/App.css'

import getCurrencies from '../services/api.service';

function Infobar() {
  
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    getCurrencies().then((res) => {
      setCurrencies(res);
    });
  }, []);

  return (
    <div className='infobar'>
        <ul>
            {currencies.map((curr) => (
                <li key={curr.id}><a href={"/charts/"+curr.id}>{curr.name}</a></li>
              ))
            }
        </ul>
    </div>
  )
}

export default Infobar