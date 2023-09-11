import '../assets/App.css'
import axios from 'axios';

import Sidebar from "../components/Sidebar";
import CurrCard from '../components/CurrCard';
import { Table } from 'react-bootstrap';
import Chart from "react-apexcharts";

import { useState, useEffect } from 'react';
import { getQuotations } from '../services/api.service';

async function getUser() {
  axios.defaults.withCredentials = true;
    const response = await axios.get('http://localhost:8000/api/user')
    return response.data
}

function Wallet() {
  const [currencies, setCurrencies] = useState([]);
  const [user, setUser] = useState({});

  let countsArray = [];
  let labelsArray = [];
  
  var options = {
    chart: {
      type: 'donut',
    },
    theme: {
        mode: 'dark',
    },  
    series: countsArray,
    labels: labelsArray,
  }


  useEffect(() => {
    getQuotations().then((res) => {
      setCurrencies(res);
    });
  }, []);

  useEffect(() => {
    getUser().then((res) => {
      setUser(res);
    });
  }, []);


  let array = [];

  let total_wallet = 0;  
  if (user.wallet != undefined) {
    for (let i = 0; i < user.wallet.length; i++) {
      array.push({
        id: user.wallet[i].id,
        name: currencies[i].name,
        code: currencies[i].code,
        amount: currencies[i].quotations[29].count,
        count: user.wallet[i].count,
      });

      labelsArray.push(currencies[i].code);
      countsArray.push(user.wallet[i].count);
    }
  
    total_wallet = array.reduce((acc, current) => acc + current.amount * current.count, 0);
  }

  return (
    <div className='d-flex flex-row w-100vw'>
        <Sidebar />
        <div className='w-100 ps-4'>
            <div className='mt-3'>
              <div className='d-flex flex-column flex-wrap justify-content-around'>
                <h1 className='mb-5 underline'>Mon Portefeuille</h1>
                <Table responsive >
                  <thead>
                    <tr>
                      <th>Nom</th>
                      <th>Symbole</th>
                      <th>Portefeuille</th>
                      <th>Montant</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {array?.map((data) => (
                      <tr key={data.id}>
                      <td>{data.name}</td>
                      <td>{data.code}</td>
                      <td>{data.count}</td>
                      <td>{data.amount} $</td>
                      <td>
                        <button>Acheter</button>
                        <button>Vendre</button>
                      </td>
                    </tr>))}
                    <tr>
                      <td><b>Total</b></td>
                      <td></td>
                      <td></td>
                      <td><b>{(user.dollars_wallet + total_wallet).toFixed(4)} $</b></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>

                <div className='my-4'>
                  <p>* Les montants sont calculés en fonction du cours actuel de la crypto-monnaie.</p>

                  <Chart
                  className='mb-5 d-flex justify-content-center'
                  options={options}
                  series={options.series}
                  type="donut"
                  width={"60%"}
                  />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Wallet