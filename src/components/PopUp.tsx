import './popup.css';
import { useState } from "react";
const PopUp = (props:any)=>{

    const [percentage, setPercentage] = useState(30);

    const handleCancelAction = ()=>{
        // ici,  on reset toutes les valeurs et on appele le close de du component parent
        setPercentage(30);
        props?.onClose();
        
    }
    return(
        <div id="pop-upwhole-page-wrapper" style={{display: props?.display}}>
            <div className="content-wrapper">
                <h3 className="popup-title">Select the percentage you wana close</h3>
                <input type="range" className="input" name="target_percentage" id="target_percentage" value={percentage} onChange={(e)=>{ setPercentage(e.currentTarget.valueAsNumber)}} />
                <p>Close amount: {(percentage* (props.amount || 10))/100} $  _ <strong> {percentage} % </strong> </p>
                <footer className='btn-container'>
                    <button className='btn' onClick={handleCancelAction}>cancel</button>
                    <button className='btn'>Validate</button>
                </footer>
            </div>
        </div>
    )
}

export default PopUp;