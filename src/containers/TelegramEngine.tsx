import Form from "../components/form/Form";
import Balance from "../components/Balance";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const TelegramEngine = ()=>{

    // type pour le hok requestStatut

    const [requestStatut, setRequestStatut] = useState({statut: "start", next: "phoneNumber"});
    
    const submitPhoneNumber = (targetData:string)=>{
        return axios.post("http://localhost:500/telegram/start/", {
            phoneNumber: targetData 
        });
    }

    const submitTelegramCode = (targetData :string)=>{
        return axios.post("http://localhost:500/telegram/start/", {
            telegramCode: targetData 
        });
    }

    useEffect(()=>{
        console.log("request statut modifié");
        console.log(requestStatut);
    }, [requestStatut]);


    return (
        <>
        <section className="section-header">
            <Balance />
            <p className="section-title" >Telegram Manager</p>
        </section>
        {
            requestStatut.statut == "start" || requestStatut.next == "retrieve" ?
            <Form label="Entrez le numéro de telephone autorisé" placeholder="exple: +10001112222" submitRequest={submitPhoneNumber} setRequestStatut={setRequestStatut} />
            :
            <Form label="Entrez le code reçu par telegram" placeholder="exple: aaAaAAaA" submitRequest={submitTelegramCode} setRequestStatut={setRequestStatut} />
        }
        </>
    )
}

export default TelegramEngine;