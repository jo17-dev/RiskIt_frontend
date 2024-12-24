import './navBar.css';
const NavBar = ()=>{
    return (
        <ul className="nav-bar-container">
            <li> <a className="btn" href="#">Trades history</a> </li>
            <li> <a className="btn" href="#">Opened trades</a> </li>
            <li> <a className="btn" href="#">Start telegram engine</a> </li>
        </ul>
    )
}

export default NavBar