import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'

const Navbar = ({showSidebar, children}) => {
    return (
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>

            {children}
            
            <Link to="#" className="account-tab">
                <FaIcons.FaUserCircle />
            </Link>
        </div>
    );
}

export default Navbar;