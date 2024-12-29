import './App.css'
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import TradesHitory from '../containers/TradesHistory';
import { useState } from 'react';
import OpenedTrades from '../containers/OpenedTrades';
import PopUp from '../components/PopUp';
import TelegramEngine from '../containers/TelegramEngine';

function App() {

  const [curentDatasDisplay, setCurentDatasDisplay] = useState(<TradesHitory />);

  // this function is to handle "page changing from the header component.."
  const changeContentTo = (target:string)=>{
    console.log("changing content to "+target);
    switch(target){
      case "trades_history":
        setCurentDatasDisplay(<TradesHitory />);
        break;
      case "trades_opened":
        setCurentDatasDisplay(<OpenedTrades />);
        break;
      case "telegram_engine":
        setCurentDatasDisplay(<TelegramEngine />);
        break;
      default:
        setCurentDatasDisplay(<TradesHitory />);
        break;
    }
  }

  return (
    <>
    <Header />
    <NavBar onChangeContent={changeContentTo} />
    <div className="main-content">
      {curentDatasDisplay}
    </div>
    </>
  )
}

export default App;
