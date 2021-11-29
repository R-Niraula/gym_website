import React from 'react'
import styled from 'styled-components'
import {GiWeightLiftingUp} from 'react-icons/gi'
import { BiRun } from 'react-icons/bi'
import './fee.css'
import cardio from '../images/cardio.jpg'
import weight from '../images/weight.jpg'
import esewa from '../images/esewa-logo.png'


const Fees = () => {
    return (
    <>
    <div className="feeHeader">
      <h2>How we charge</h2>
    </div>
     <div className="GymFee">
       <div className="weight">           
         <div className="price_tag">
           <h2>Rs. 1000</h2> 
           <img className="esewa" src={esewa} alt="e-sewa" />   
         </div>
       </div>
       <div className="cardio">
          <div className="price_tag">
            <h2>Rs. 1500</h2> 
          <img className="esewa" src={esewa} alt="e-sewa" /> 
            
          </div> 
       </div>
     </div>
    </>
    )
}

export default Fees
