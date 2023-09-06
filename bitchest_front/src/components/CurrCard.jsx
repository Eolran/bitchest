import '../assets/App.css'

function CurrCard(props) {
    const user = JSON.parse(localStorage.getItem('user'))

    return (
        <div className='currCard'>
            <img src={props.logo} alt="" />
            <span>{props.name} </span>
            <span>Chart Crypto</span>
        </div>
      )
}

export default CurrCard