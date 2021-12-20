
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
const Main = styled.div`
 background-image: url(${banner});
   background-size: cover;
   min-height: 850px; 
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   p{
    text-align: left;
    font: normal normal normal 20px Arial;
    letter-spacing: 0px;
    color: #ECFFFD;
    opacity: 1;
    line-height: 1.5;
    text-align:center;
} 
h3{
    
    /* text-align: left; */
    font: normal normal bold 60px Titillium Web;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-transform: capitalize; 
    opacity: 1; 
    text-align:center;  
 }
`
export function Banner(props) {
    return (
        <Section>
            <Container>
                <div className='row'>
                    <div className='mt-4 col-md-6 content'>
                        <h3>{props.title}</h3>
                        <p>{props.description}</p>
                        {props.visible ? <Button>Get Started</Button> : null
                        }

                    </div>
                </div>
            </Container>
        </Section>

    )
}
export function AboutBanner(props) {
    return (
        <Main>
            <h3>An arch bridging <br/> Blockchain technology to <br/> developers.</h3>
            <p>Project Ozark is a developer platform with high-security smart contract writing<br/> guidelines. Founded in 2021, Project Ozark has set industry standards for building<br/> a secure Zilliqa DAPPs.</p>
        </Main>
    )
}
