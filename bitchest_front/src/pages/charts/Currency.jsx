import '../../assets/App.css'

import Sidebar from "../../components/Sidebar";
import axios from 'axios';
import Chart from "react-apexcharts";

import { useState, useEffect } from 'react';

async function getCurrency() {
    return await axios.get('http://localhost:8000/api/currencies/'+window.location.href.split('/').pop())
}
async function getUser() {
  try {
    axios.defaults.withCredentials = true;
    return await axios.get('http://localhost:8000/api/user')
  } catch (error) {
    console.error(error);
    alert('Votre session a expiré, veuillez vous reconnecter')
    window.location.href = 'http://localhost:5173/login'
  }
}

function Currency() {
  const [currency, setCurrency] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    getCurrency().then((res) => {
      setCurrency(res.data);
      },
      getUser().then((res) => {
        setUser(res.data);
      })
    );
    }, []);

  if (currency) {
    let countArray = [];
  for (let i = 0; i < 29; i++) {
      countArray.push(currency.quotations[i].count); 
  }

  let dateArray = [];
  for (let i = 0; i < 29; i++) {
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
            <h1>{currency?.name}</h1>

            {currency && <Chart
                options={options}
                series={options.series}
                type="line"
            />}
            <div>
              {user && countArray && <button {...user.dollar_count < countArray.pop() ? 'disabled' : 'enabled'}></button>}
            </div>
        </div>
    </div>
  )
}

export default Currency



/*

eyJpdiI6ImtsQ1B1OGlXZHB0WS9VM2RxM1dQSVE9PSIsInZhbHVlIjoib1RKakRKY085cGVyRERieml2VUNtb0YxdHc4djdsN1NDM2lSNlBsRXJHUm1lOU5YV2xYV3p4anAzMzh2MkMyV05zNW
FJNkZkVjhwd0xGQktETkplYXp3akVvUGtob1RldlZJTEtQazhjSmRCZ1JuYUt3MDgwNHFiNmpuUStTSFUiLCJtYWMiOiJjNzgyZjljMjg1Y2FkYTgxMDgxYWVhMzRiZDIyYTIwN2M3NjNmZjY4
ZjI1NzliZWQyYTczMTZmOTczOTMyNDFjIiwidGFnIjoiIn0=

*/