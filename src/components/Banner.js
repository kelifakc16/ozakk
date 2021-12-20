
import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import styled from 'styled-components';
import banner from "../images/landing-new.svg"
const Section = styled.div`
   background-image: url(${banner});
   background-size: cover;
   min-height: 850px; 
.content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px 0px;
}
    p{
    text-align: left;
    font: normal normal normal 20px Arial;
    letter-spacing: 0px;
    color: #ECFFFD;
    opacity: 1;
    line-height: 1.5;
} 
h3{
    
    /* text-align: left; */
    font: normal normal 350 60px Titillium Web;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-transform: capitalize;
    opacity: 1;
    margin-top: 100px;
 }
Button{
    max-width: 20%;
    background-color: transparent;
    border: 2px solid #FDAC03;
    border-radius: none;
    color: #FDAC03;
     padding: 8px 20px; 

}`
export default function Banner() {
    return (
        <Section>
            <Container>
                <div className='row'>
                    <div className='mt-4 col-md-6 content'>
                        <h3>We Create Community.</h3>
                        <p>lorem Ipsum is simply dummy text of the printing an<br/> typesetting industry. Lorem Ipsum has been the<br/>industry's.</p>
                        <Button>Get Started</Button>
                    </div>
                </div>
            </Container>
        </Section>

    )
}
