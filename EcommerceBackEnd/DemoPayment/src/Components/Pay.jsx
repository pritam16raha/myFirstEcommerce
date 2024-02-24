//import React from 'react'

import styled from 'styled-components';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../assets/logo.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

const PUBLIC_KEY = "pk_live_51OmBgjSCPxF1Zilc9dUCZR931EMAlRdwtj9yL1mOfGuelSgfVusY6tYX5XAWg1f5fvfy9uoPdYqrIIM9Avw0yd4e00FOpsmL7R"

const Button = styled.button`
width: 500px;
height: 200px;
`

const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        console.log(token);
        setStripeToken(token);
    }
  
    useEffect(()=> {
        const makeRequest = async() =>{
            try{
                const response =await axios.post("http://localhost:5000/api/checkout/payment",
                {
                    tokenId: stripeToken.id,
                    amount: 2000,

                }
            );
            console.log(response.data);
            }catch(err){
                console.log(err)
            }
        }
        stripeToken && makeRequest
    },[stripeToken])
  
    return (
    <StripeCheckout name='Pritam Co' 
    image={Logo}
    billingAddress
    shippingAddress
    description="Pritam's Bill"
    amount={20}
    token={onToken}
    stripeKey={PUBLIC_KEY}

    >
        <Button>
            <h1>Payment page</h1>
        </Button>
    </StripeCheckout>
    
  )
}

export default Pay