import { NavLink } from 'react-router-dom'
import './Header.scss'
import logo from './icons/logo.svg'

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about" className="about-link">
          About us
        </NavLink>
      </nav>
    </div>
  )
}

export default Header
