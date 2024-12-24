import { useEffect, useState } from "react";
import './balance.css';

const Balance = ()=>{
    const [balance, setBalance] = useState(567);

    useEffect(()=>{
        // On recupére le solde
        setBalance(900);
        // fetch("http://localhost:500", {
        //     method: 'get'
        // }).then((value: Response)=>{
        //     console.log(value);
        //     setBalance(value.json.nombre);
        // })
    }, [])

   return (
    <>
    <p className="total-curent-balance" >Solde: <strong>{balance}</strong> $ </p>
    </>
   );
}

export default Balance;