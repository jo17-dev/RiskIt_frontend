import { useEffect, useState } from "react";
import Balance from "../components/Balance";
import RowItem from "../components/RowItem";
import axios, { AxiosResponse } from "axios";
import './tradesHistory.css';

const TradesHitory = ()=>{
    const [trades, setTrades] = useState([]);
    // on recupere tout l'historique des trades:
    useEffect(()=>{

        axios.get("http://localhost:500/history").then((value)=>{
                console.log( value.data);

                setTrades(value.data?.datas);
            }).catch((reason:any)=>{
                console.warn("Aucun historique n'as été recupéré");
            });

    
    }, []);

    return(
        <>
        <section className="section-header">
            <Balance />
            <p className="section-title" >Trades history</p>
        </section>
        <table className="datas-table">
            <thead className="datas-tablea-header">
                <tr>
                    <td>Id</td>
                    <td>trade</td>
                    <td>SL</td>
                    <td>TP</td>
                    <td>Marge</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {
                    trades.map((value:any, key:number)=>{
                        return <RowItem key={key} id={value.id} trade={value.type} sl={value.sl} tp={value.tp} marge={value.marge} />
                    })
                }
            </tbody>
        </table>
        </>
    )
}

export default TradesHitory;