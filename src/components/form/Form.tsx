// form of a sigle entry component
import React, { useState } from "react";
import "./Form.css";
import { AxiosResponse } from "axios";


// type attendu en propriétés du form
interface FormProps {
    label: string,
    placeholder: string,
    submitRequest: (phone:string)=>Promise<AxiosResponse>,
    setRequestStatut: React.Dispatch<React.SetStateAction<{statut: string; next: string;}>>
}

/**
 * on est ici capable d'indiquer la requette qu'il faut pour le faire
 * @param {string} label  label du champs à utiliser
 * @param {string} placeholder placeholder du champ unnique
 * @param {Promise} submitRequest requette à faire
 * @param {Dispatch<SetStateAction<{ statut: string; next: string; }>>} setRequestStatut renvoie le statut de le requette effectuée au parent via un setState 
 * @returns 
 */
const Form: React.FC<FormProps> = ({label, placeholder="" ,submitRequest, setRequestStatut})=>{
    const [phone, setPhone] = useState("");
    const [loadingState, setLoadingState] = useState(false);
    const [message, setMessage] = useState({type: "", content:""});

    const handleChange = (e:any)=>{
        setPhone(e.target.value);
    }

    const handleSubmit = (e:any)=>{
        e.preventDefault();
        setLoadingState(true);

        // vérifications
        // if()

        if(phone.length <= 0){
            setMessage({type: "error", content: "Erreur. assurez-vous que le formulaire contient bien l'informtion demanée"});
            setRequestStatut({statut: "failed", next:"retrieve"});
            setLoadingState(false);
            return;
        }

        // performing the request
        submitRequest(phone)
        .then((value)=>{
            setMessage({type:"success", content: "Opération réussie"});
            console.log(value.data);
            setRequestStatut({statut: "success", next:"code"});
            setPhone("");
        }).catch((reason:any)=>{
            setMessage({type: "error", content: "Echec de l'opération"});
            // setRequestStatut("failed");
            setRequestStatut({statut: "failed", next:"code"});
        }).finally(()=>{
            setLoadingState(false);
        });
    }

    return(
        <div className="form-container">
            <div className="form-fields">
                <div className="form-field">
                    <label htmlFor=""> {label} </label>
                    <input type="tel" placeholder={placeholder} value={phone} onChange={handleChange} />
                </div>
                <div className="success-message">
                    {loadingState ? <div className="loading-animation"></div> : <div className={message.type == "error" ? "error-message" : "sucess-message"}> {message.content} </div> }
                </div>
                <div className="form-field">
                    <button className="btn" type="submit" onClick={handleSubmit}>Envoyer</button>
                </div>
            </div>

        </div>
    )
}

export default Form;