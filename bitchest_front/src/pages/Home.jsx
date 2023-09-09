import '../assets/App.css'
import { Table } from 'react-bootstrap';

import Sidebar from "../components/Sidebar";

import { useState, useEffect } from 'react';
import { getQuotations } from '../services/api.service';

function Home() {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    getQuotations().then((res) => {
      try {
        setCurrencies(res);
      } catch (error) {
        
      }
    });
  }, []);



  return (
    <div className='d-flex flex-row w-100vw'>
        <Sidebar />
        <div className='w-100 screenHeight ps-4'>
            <div className='mt-3'>
              <Table striped bordered hover>
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
              </Table>
            </div>
        </div>
    </div>
  )
}

export default Home