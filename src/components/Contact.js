import React, {useState} from 'react'
import styled from 'styled-components'
import emailjs from 'emailjs-com'



const ContactUs = styled.div`
 margin-top: 0px;
 padding: 65px 0;
`
const ContentWrap = styled.div`
 margin: 0 0 -120px 0;
 padding: 0;
 display:grid;
 grid-template-columns:  20% 60% 20%;
 
@media screen and (max-width:950px){
  display:grid;
 grid-template-columns:  15% 70% 15%;
   
}
@media screen and (max-width:650px){
display: grid;
grid-template-columns:1fr;
margin-top: 40px;
margin-bottom: 60px;
}
`
const SideColor = styled.div`
  height: 800px;
  text-align: center;
  margin: 0;
  background-color:#e7e6e6;
@media screen and (max-width:650px){
  display: none;
}

`
const ContactForm = styled.div`
 text-align: center;
 margin-top: 50px;

 input{
     width:500px;
     height: 40px;
     border-top: none;
     border-left: none;
     border-right: none;
     outline: none;
    
 }
 input:focus{
   border-color:#5fa8d3;
 }
textarea{
  width:500px;
     height: 80px;
     outline: none;
  
}
textarea:focus{
  border-color: #5fa8d3;
}
.submit_btn{
  background-color:black;
  color: #fff;
  border:none;
  width:100px;
  transition: 0.3s ease-in-out;
}
.submit_btn:hover{
  transform: translateY(-2px);

}

@media screen and (max-width:950px){
input, textarea{
  width:300px;
}

}
@media screen and (max-width:650px){
form{
  margin-top: 50px;
}
}
@media screen and (max-width:300px){
 input, textarea{
   width:250px;
 }
}
`


const Contact = () => {
 
  const [registration, setRegistration] = useState({
     fullname:"",
     email:"",
     phone:"",
     message:""
  })

  const handleInput = (e) =>{
    const name = e.target.name
    const value = e.target.value
    console.log(name,value)

    setRegistration({...registration, [name]: value })
    }


    return (
        <ContactUs>
            <ContentWrap>
              <SideColor>
               
              </SideColor>
              <ContactForm>
                <h2>Matador Gym & Fitness Center</h2>
                <h3>Contact Us</h3>
                <form action="">
                  <input type="text" name="fullname" id="fullname"
                  value={registration.fullname}
                  onChange={handleInput}
                  placeholder="Full Name" required /><br /><br /><br />
                 
                  <input type="email" name="email" id="email"
                  value={registration.email}
                  onChange={handleInput}
                  placeholder="Email Address" required /><br /><br /><br />
                 
                  <input type="number" name="phone" id="phone"
                  value={registration.phone}
                  onChange={handleInput}
                  placeholder="+977-9876543210" required /><br /><br /><br /><br />
                 
                  <textarea name="message" id="message"
                  value={registration.message}
                  onChange={handleInput}
                  placeholder="Write something..." /> <br /><br />
                 
                  <input type="submit" value="Send" className="submit_btn" />
                </form>
              </ContactForm>
              <SideColor>
                     
              </SideColor>
            </ContentWrap>  
        </ContactUs>
    )
}

export default Contact
