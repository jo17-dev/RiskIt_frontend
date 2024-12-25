import Balance from "../components/Balance"
import RowItem from "../components/RowItem";
import PopUp from "../components/PopUp";
import { useState } from "react";
const OpenedTrades = ()=>{

    const [isPopPupHidden, setIsPopUpHidden] = useState(true);

    const handleAction = ()=>{
        console.log("manage action");
        setIsPopUpHidden(false);
    }

    const handlePopUpClose = ()=>{
        setIsPopUpHidden(true);
    }

    return (
        <>
        <section className="section-header">
            <Balance />
            <p className="section-title" >Opened trades</p>
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
                <RowItem actionText="Manage" handleAction={handleAction} />
                <RowItem actionText="Manage" handleAction={handleAction} />
                <RowItem actionText="Manage" handleAction={handleAction} />
                <RowItem actionText="Manage" handleAction={handleAction} />
                <RowItem actionText="Manage" handleAction={handleAction} />
                <RowItem actionText="Manage" handleAction={handleAction} />
                <RowItem actionText="Manage" handleAction={handleAction} />
                <RowItem actionText="Manage" handleAction={handleAction} />
                <RowItem actionText="Manage" handleAction={handleAction} />
                <RowItem actionText="Manage" handleAction={handleAction} />
                <RowItem actionText="Manage" handleAction={handleAction} />
            </tbody>
            
        </table>
        <PopUp display={isPopPupHidden ? "none" : "flex"} amount={67} onClose={handlePopUpClose} />
        </>
    )
}

export default OpenedTrades;