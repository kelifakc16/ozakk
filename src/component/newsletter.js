import React from 'react'
import styled from 'styled-components';
import { Container, Button } from 'react-bootstrap'
import bg from "../images/contact.svg"

const Stylenewsletter = styled.div`
background-image: url(${bg});
min-height:500px;
background-size: cover;

h1{
    color: #ffff;
   text-align: center;
   padding: 30px;
   font-size: 33px;
   font-weight: bold;
}
p{
    color: #ffff;
   text-align: center;
   padding: 30px;
   font-size:20px;
   font-weight: 500;
}
input{
    width:40%;
   /* margin: auto; */
    border:none;
    padding: 11px 10px;
    margin-left: 340px;
   
}
button{
    background-color: transparent;
    color: #ffff;
    border:1px solid #ffff;
    padding: 10px 30px;
    /* margin: auto; */
}
button:hover{
    border:1px solid yellow;
}

`
export default function Newsletter() {
    return (
        <Stylenewsletter>
            <Container>

                <h1>Subscribe to our Newsletter</h1>
                <div>
                    <input type="text" placeholder="Enter Your Email Address" />
                    <button>Submit</button></div>
                <p>Please send an email to support@ozark.com for general queries, including partnership opportunities.</p>

            </Container>
        </Stylenewsletter>
    )
}
