import '../../assets/App.css'

import Sidebar from "../../components/Sidebar";
import axios from 'axios';
import Chart from "react-apexcharts";

import { useState, useEffect } from 'react';
import { sellCurrency } from '../../services/api.service';


const id = window.location.href.split('/').pop();

async function getCurrency() {
    return await axios.get('http://localhost:8000/api/currencies/'+ id)
}
async function getUser() {
    axios.defaults.withCredentials = true;
    return await axios.get('http://localhost:8000/api/user')
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

    console.log(user);


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
                className='d-flex justify-content-center'
                options={options}
                series={options.series}
                type="line"
                width={"80%"}
            />}
        </div>
    </div>
  )
}

export default Currency