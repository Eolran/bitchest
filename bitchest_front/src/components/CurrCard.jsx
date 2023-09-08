import '../assets/App.css'
import Chart from "react-apexcharts";

function CurrCard(props) {

    const quotations = props.quotations;

    let countArray = [];
    for (let i = 29; i > 19; i--) {
        countArray.push(quotations[i].count); 
    }

    let dateArray = [];
    for (let i = 29; i > 19; i--) {
        dateArray.push(quotations[i].date); 
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

    //   var chart = new ApexCharts(document.querySelector('#' + props.id), options);
    //   chart.render();

    return (
        <div key={props.code} className='currCard'>
            <img src={props.logo} alt="" />
            <a href={"./"+props.id}>{props.name} </a>
            <Chart
                options={options}
                series={options.series}
                type="line"
                height={"90%"}
            />
        </div>
      )
}

export default CurrCard