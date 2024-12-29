import './navBar.css';
const NavBar = (props:any)=>{
    return (
        <ul className="nav-bar-container">
            <li> <a className="btn" onClick={()=>{props?.onChangeContent("trades_history")}} href="#">Trades history</a> </li>
            <li> <a className="btn" onClick={()=>{props?.onChangeContent("trades_opened")}} href="#">Opened trades</a> </li>
            <li> <a className="btn" onClick={()=>{props?.onChangeContent("telegram_engine")}} href="#">Telegram engine</a> </li>
        </ul>
    )
}

export default NavBar