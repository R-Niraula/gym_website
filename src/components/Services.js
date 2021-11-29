import React from 'react'
import styled from 'styled-components'
import './service.css'
import Trainer from '../images/trainer.jpg'
import { lighten } from '@material-ui/core'
import { GiFruitBowl } from 'react-icons/gi'
import Cardio from '../images/cardio.jpg'
import Diet from '../images/diet_plan.jpg'



const Services = () => {
    return (
    <>
    <hr />
      <div className="service_header">
        <h2>What we provide</h2>
      </div>
      <div className="black_bg">
      </div>
       <div className="about_content">
            <div className="fservice">
              <img className="trainer" src={Cardio} />
              <h4>Cardio Training</h4>
            </div>
            <div className="black_resp">
              <div className="inside_black">
              </div>
            </div>

            <div className="sservice">
              <img className="trainer" src={Trainer} />
              <h4>Weight training</h4>
            </div>
            
            <div className="black_resp2">
              <div className="inside_black">
              </div>
            </div>
            <div className="tservice">
              <img className="trainer" src={Diet} />
              <h4>Perfect Diet Plan</h4>
            </div>    
        </div>
        <hr />
    </>
    )
}


export default Services
