import './navbar.css'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';


const Navbar = () => {
  const {user} = useContext(AuthContext)

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/')
  }
  const loginClick = () => {
    navigate('/login')
  }
  return (
    <div className='navbar'>
        <div className="navContainer">
            <span className='logo' onClick={handleClick}>Booked</span>
            {user? user.username : (<div className="navItems">
                <button className="navButton" onClick={loginClick}>Register</button>
                <button className="navButton" onClick={loginClick}>Login</button>
            </div>)}
        </div>
    </div>
  )
}

export default Navbar