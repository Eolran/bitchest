import '../assets/App.css'
import axios from 'axios';

import Sidebar from "../components/Sidebar";
import CurrCard from '../components/CurrCard';
import { Table } from 'react-bootstrap';
import Chart from "react-apexcharts";

import { useState, useEffect } from 'react';
import { getQuotations, sellCurrency } from '../services/api.service';
// import TradeModal from '../components/TradeModal';

async function getUser() {
  axios.defaults.withCredentials = true;
    const response = await axios.get('http://localhost:8000/api/user')
    return response.data
}


function handleSell(userId, currencyId, userWallet, currencyCount, currencyPrice) {

  const data = {
    user_id: userId,
    currency_id: currencyId,
    dollars_count: currencyPrice * currencyCount,
    currency_count: currencyCount,
    transaction_type: 'sell',
    currency_price: currencyPrice,
    new_dollars_wallet: userWallet + currencyPrice * currencyCount
  }
  const response = sellCurrency(data).then((res) => {
    console.log(res);
  })

  console.log(response);
}

// function handleBuy(userId, currencyId, userWallet, currencyCount, currencyPrice) {
//   const data = {
//     user_id: userId,
//     currency_id: currencyId,
//     dollars_wallet: userWallet,
//     currency_count: currencyCount,
//     transaction_type: 'buy',
//     currency_price: currencyPrice,
//     new_dollars_wallet: userWallet - currencyPrice * currencyCount
//   }
//   const response = buyCurrency(data);

//   console.log(response);
// }

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
                      // console.log(data),
                      <tr key={data.id}>
                      <td>{data.name}</td>
                      <td>{data.code}</td>
                      <td>{data.count}</td>
                      <td>{data.amount} $</td>
                      <td>
                        <button onClick={() => alert("L'achat sera disponible prochainement, veuillez patienter.")}>Acheter</button>
                        {data.count == 0 ? "" : <button
                        onClick={() => {handleSell(user.id, data.id, user.dollars_wallet, user.wallet[data.id-1].count, data.amount)}}
                        >Vendre</button>}
                      </td>
                      {/* <TradeModal
                      userid={user.id}
                      currencyCount={data.id}
                      /> */}
                    </tr>
                    ))}
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