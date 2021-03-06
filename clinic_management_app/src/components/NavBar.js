import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
const NavBar = () => {
    return (

        <div className='navCenter'><hr/><hr/>
            <NavLink activeClassName="active" style={{ margin: "20px" }} to="/">HOME</NavLink>
            <NavLink activeClassName="active" style={{ margin: "20px" }} to="/patient/search">SEARCH</NavLink>
            <NavLink activeClassName="active" style={{ margin: "20px" }} to="/patient/add">ADD</NavLink>
            <NavLink activeClassName="active" style={{ margin: "20px" }} to="/patient/edit">EDIT</NavLink><hr/><hr/>
        </div>

    )
}

export default NavBar;