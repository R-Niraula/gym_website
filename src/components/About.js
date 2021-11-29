import React,{useState} from 'react'
import Gajju from '../images/prince.jpg'
import Suresh from '../images/suresh.jpg'
import Prashant from '../images/prashant.jpg'
import styled from 'styled-components'
import { Button } from '@material-ui/core'



const Coach = styled.div`
 margin: auto;
width: 80%;
 text-align: center;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;

@media screen and (max-width:901px){
 display: grid;
 grid-template-columns:1fr;
 grid-template-rows:  1fr 1fr 1fr;
 
} 
`

const Img = styled.img`
 margin: auto;
 width:200px;
 height: 200px;
 border-radius: 50%;
 transition: 0.2s ease-in-out;
&:hover{
    transform: translateY(-2px);

}
@media screen and (max-width: 600px){
    
    margin: 20 auto;
    width:150px;
    height: 150px;
    
}
`
const Image = styled.img`
 margin:-50px auto;
 width:210px;
 height: 210px;
 border-radius: 50%;
 transition: 0.2s ease-in-out;
 
 &:hover{
    transform: translateY(-2px);
 }   
 @media screen and (max-width: 901px){
    
    margin: 20px auto;
    width:200px;
    height: 200px;
    
}
@media screen and (max-width: 600px){
    
    margin: 20 auto;
    width:150px;
    height: 150px;
    
}
`
const Head = styled.h1`
 margin-bottom: 130px;
 text-align: center;
@media screen and (max-width:901px){
    margin-bottom:50px;
}
`

const AboutContent = styled.div`
 margin: 30px auto;
 width:85%;


.read_btn{
    z-index: 0;
    display: none;
}

@media screen and (max-width:380px){
width:85%;
.read_btn{
    display: block;
}
.hideText{
    display: none;
}
.showText{
    display: block;
}
}
`





const About = () => {
    const[click, setClick] = useState(true)
    const btnClicked = () =>{
        setClick(!click)
    }
    return (
    <> 
        <Head>
         Coaches    
        </Head> 
        <Coach className="coaches">
          <Img className="minor" src={Gajju} alt="Gajju" />
          <Image className="major" src={Suresh} alt="Suresh" />
          <Img className="minor" src={Prashant} alt="Prashant" />
        </Coach>
        <br /><br />
        
        <AboutContent>  
           <p>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting. remaining essentially unchanged.<p className={click ? "hideText" : "showText"}> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
           The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
           <br /><br />
           <Button onClick={btnClicked} className="read_btn" variant="contained">{click ? "Read More" : "Read Less" }</Button>
           </p>
        </AboutContent>
    </>
    )
}

export default About
