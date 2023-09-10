import '../../assets/App.css'

import Sidebar from "../../components/Sidebar";
import axios from 'axios';
import Chart from "react-apexcharts";

import { useState, useEffect } from 'react';

async function getCurrency() {
    return await axios.get('http://localhost:8000/api/currencies/'+window.location.href.split('/').pop())
}
async function getUser() {
    axios.defaults.withCredentials = true;
    return await axios.get('http://localhost:8000/api/user')
}

function handleSell(user, currency) {
  const data = {
    user_id: user.id,
    currency_id: currency.id,
    count: currency.count,
  }

  console.log(data);
}

function Currency() {
  const [currency, setCurrency] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    getCurrency().then((res) => {
      setCurrency(res.data);
      },
    );
    }, []);

    useEffect(() => {
      getUser().then((res) => {
        setUser(res.data);
      })
    }, []);
    

  let countArray = [];
  let dateArray = [];
  if (currency) {
    for (let i = 0; i < 30; i++) {
      countArray.push(currency.quotations[i].count); 
    }
    for (let i = 0; i < 30; i++) {
        dateArray.push(currency.quotations[i].date); 
    }

    var options = {
      chart: {
        type: 'line',
      },
      theme: {
          mode: 'dark',
      },  
      series: [{
        name: 'quotations',
        data: countArray,
        color: '#FF1654'
      }],
      xaxis: {
          type: 'datetime',
          categories: dateArray
      },
      // tooltip: {
      //     enabled: true,
      //     theme: 'dark',
      // },
    }
  }

  return (
    <div className='d-flex flex-row w-100vw'>
        <Sidebar />
        <div className='w-100'>
            <h1 className='my-5 underline'>{currency?.name}</h1>

            {currency && <Chart
                options={options}
                series={options.series}
                type="line"
            />}
            <div className='my-4'>
              {(user && currency) && 
              <button 
                disabled={user?.dollars_wallet < countArray[countArray.length-1] ? true : false}
                // countArray[countArray.length-1]
                >
                Acheter
              </button>}
              {(user && currency) && 
              <button 
                disabled={user.wallet[user.wallet.findIndex(element => element.id === currency.id)].count = 0 ? true : false}
                onClick={() => handleSell({id: user.id}, {id:currency.id, count:user.wallet[user.wallet.find(element => element.id === currency.id)].count})}>
                Vendre
              </button>}
            </div>
        </div>
    </div>
  )
}

export default Currency