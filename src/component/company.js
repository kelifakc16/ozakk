import React from 'react'
import styled from 'styled-components';
import Platform from './platform';
import { Container} from 'react-bootstrap'
import bitgo from '../images/bitgo.jpg'
import compound from '../images/compound.png'
import brave from '../images/brave.webp'
import coinbase from '../images/coinbase.jpg'


const Stylecompany=styled.div`
.line{
margin: 20px;
height: 2px;
width: 4%;
background-color: #FDAC03;
}
h4{
    font: normal normal normal 23px Segoe UI;
letter-spacing: 0px;
color: #FDAC03
}
h1{
    font: normal normal 600 45px Titillium Web;
letter-spacing: 0.35px;
color: #291B00;
text-transform: capitalize;
padding:5px 0px;
}

`
export default function Company() {
    return (
        <Stylecompany>
        <Container>
         <div className='d-flex'>
                    <h4>Powered By</h4>
                    <h3 className='line'></h3>
                </div>
                <h1>Backed By</h1>
            
           <div className='d-flex my-4'>
                <Platform imgscr={bitgo}/>
                 <Platform imgscr={compound}/>
                  <Platform imgscr={brave}/>
                   <Platform imgscr={coinbase}/>
                    <Platform imgscr={bitgo}/>
                    </div>
               
            </Container>
        </Stylecompany>
    )
}
