import Balance from "../components/Balance";
import RowItem from "../components/RowItem";
import './tradesHistory.css';

const TradesHitory = ()=>{
    // on recupere tout l'historique des trades:
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
                <RowItem />
                <RowItem />
                <RowItem />
                <RowItem />
                <RowItem />
                <RowItem />
                <RowItem />
                <RowItem />
                <RowItem />
                <RowItem />
                <RowItem />
                <RowItem />
            </tbody>
        </table>
        </>
    )
}

export default TradesHitory;