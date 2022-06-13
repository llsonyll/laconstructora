import { Outlet, Link } from 'react-router-dom';
import './navbar.css';

const NavBar = () => {
    return <div className="navBar">
        <div className="navbar_title"> La Constructora </div>
        <div className="navbar_tabs">            
            <Link to='/home/form' className='navbar_link'> Form</Link>
            {/* <Link to='/home/inventory' className='navbar_link'> Inventory</Link> */}
        </div>

        <Outlet />
    </div>
}

export default NavBar;