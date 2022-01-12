import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { navData } from '../data/NavData'
import './Navbar.css' 
import { FaBars } from 'react-icons/fa'
import logo from '../images/logo.png'


const Navbar = () => {

  const [state, setState] = useState(true)
   
  const toggleBtn = () =>{
    setState(!state)
  }

  
  return (
    <>
     <div className={state ? "navbar" : "navbarOpen"}>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className={state ? "navItems" : "navItemOpen"}>
          {
            navData.map((item, i)=>(
              <Link to={item.path} key={i}>
                {item.title}
              </Link>
            ))
          }
          {/* respButton */}
          <div className='resp_btn'>
            <Link to="/contact">
              Contact Us
            </Link>
          </div>
        </div>
        <div className='btn'>
          <Link to="/contact">
            Contact Us
          </Link>
        </div>
        <div className='bars'>
          <FaBars onClick={toggleBtn} />
        </div>
     </div>
    </>
  )
}

export default Navbar
