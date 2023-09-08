import '../assets/App.css'

import Sidebar from "../components/Sidebar";

import { useState, useEffect } from 'react';
import { getQuotations } from '../services/api.service';

function Home() {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    getQuotations().then((res) => {
      try {
        console.log(res);
        setCurrencies(res);
      } catch (error) {
        
      }
    });
  }, []);



  return (
    <div className='d-flex flex-row w-100vw'>
        <Sidebar />
        <div className='w-100 screenHeight'>
            <div className='mt-3'>
              <table>
                <tbody>
                  <tr>
                    <th>Nom</th>
                    <th>Symbol</th>
                    <th>Prix</th>
                    <th>Changement 24h</th>
                  </tr>
                {currencies.map((currency) => (
                  <tr key={currency.id}>
                    <td>{currency.name}</td>
                    <td>{currency.code}</td>
                    <td>{currency.quotations[29].count}$</td>
                    <td>{Math.round(((currency.quotations[currency.quotations.length-1].count / currency.quotations[currency.quotations.length-2].count)-1)*100)}%</td>
                  </tr>
                ))}
                </tbody>
              </table>
            </div>
        </div>
    </div>
  )
}

export default Home