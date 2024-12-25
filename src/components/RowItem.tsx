import './rowItem.css';
const RowItem = (props:any)=>{
    return (
        <>
        <tr className='row-item'>
            <td> {props?.id || "N/A"} </td>
            <td>{props?.trade || "N/A"}</td>
            <td>{props?.sl || "N/A"}</td>
            <td>{props?.tp || "N/A"}</td>
            <td>{props?.marge || "N/A"}</td>
            <td> <button className="btn" onClick={props?.handleAction} > {props.actionText || "Delete"} </button> </td>
        </tr>
        </>
    )
}

export default RowItem;