import React from 'react'
import styled from 'styled-components'
import fonepay from './fonepay.jpg'

const Qrcode = styled.div`
    margin-top: 100px;
    text-align:center;
    margin-bottom: 120px;

img{
    width: 500px;
    height:auto;
}
@media screen and (max-width:500px){
img{
    width: 350px;
    height:auto;
}
}
`

const Payment = () => {
    return (
        <Qrcode>
          <img src={fonepay} alt="fonepay" />
        </Qrcode>
    )
}

export default Payment
