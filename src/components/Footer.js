import React from 'react'
import logo from '../images/logo.jpg'
import './footer.css'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { IoCallSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <>
         
<section id="footer">
	<div className="container">
	  <div className="content_wrap">
        <div className="image">
          <img src={logo} className="footer-logo" />	
        </div>
        <div className="feature">
          <h1>Features</h1>
          <p>Certified Trainers</p>
          <p>Diet plan</p>
          <p>Flexible Time</p>  
        </div>
        <div className="contact">
          <h1>Contact</h1>
          <p><Link to="/"><IoCallSharp  /> +977-9876543210</Link></p>
           <p><Link to="/"><FaFacebookSquare  /> username</Link></p>
          <p><Link to="/"><FaInstagramSquare  /> username</Link></p>  
          <p><Link to="/"><BsFillHouseDoorFill  /> location</Link></p>
          <h3 className="city">Inaruwa, Nepal</h3>
        </div>
	  </div>
      <hr className='hrtag' />
 <p className="copyright">&copy; Copyright Matador Gym & Fitness Center</p>
	</div>
	
</section>
 
        </>
    )
}

export default Footer
