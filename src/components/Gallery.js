import React from 'react'
import { galleryData } from '../data/galleryData'
import styled from 'styled-components'
import { SRLWrapper } from 'simple-react-lightbox'


const GalHeader = styled.h2`
 margin-top: 0px;
 padding-top: 150px;
 text-align: center;
 color: #ab2626;
 
 .head4{
     background-color: #fff;
     color: #ab2626;
     border: 3px solid #ab2626;
     border-radius: 20px;
     padding:10px;
     width: 150px;
     margin:50px auto;
     transition: 0.4s;
     &:hover{
     background-color: #ab2626;
     color:#fff;
     transform: translateY(-2px);
}
 }
`
const GalleryComp = styled.div`
 overflow: hidden;
 width: 95%;
 margin:100px auto;
 align-items: center;
 text-align: center;
 img{
    width:350px;
    height: auto;
    margin:2px;
}
h6{
     margin-top: -100px;
 }

@media screen and (max-width:1100px){

img{
    width:300px;
    height: auto;
}
}

@media screen and (max-width:965px){
width:100%;

img{
    width: 250px;
    height:auto ;
}
}
@media screen and (max-width:370px){
 width:100% auto;

 img{
     width:150px;
     height: auto;
 }
}
`


const Gallery = () => {
    return (
    <>
     <SRLWrapper>
        <GalHeader>
          Matador Gym & Fitness Center, Inaruwa
          <h5 className="head4">Gallery</h5>
        </GalHeader>
        <GalleryComp>
         {
             galleryData.map((item,i)=>(
                <> 
                  <img src={item.imgSrc} key={i} alt={item.name} />
                </>  
             ))
         } 
        </GalleryComp>
     </SRLWrapper>
    </>
    )
}

export default Gallery
