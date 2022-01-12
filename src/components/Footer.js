import React from 'react'
import logo from '../images/logo.png'
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
          <p><a href="tel:+977-9876543210"><IoCallSharp  /> +977-9876543210</a></p>
           <p><a href="/"><FaFacebookSquare  /> username</a></p>
          <p><a href="/"><FaInstagramSquare  /> username</a></p>  
          <p><a href="https://www.google.com/maps/place/Matador+fitness+%26+gym+center/@26.6014589,87.1447965,17z/data=!3m1!4b1!4m5!3m4!1s0x39ef13772751da17:0xffd09ba1f8cbf5cf!8m2!3d26.6014619!4d87.1469758"><BsFillHouseDoorFill  /> location</a></p>
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
