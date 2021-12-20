import React from 'react'
import Sample from './sample';
import { Container, Row, Col } from 'react-bootstrap'
import { SiHiveBlockchain } from 'react-icons/si';
import { ImFileText2 } from 'react-icons/im';
import { BsChatText } from 'react-icons/bs';
import sample from "../images/sample-contract.svg"
import styled from 'styled-components';
const Contract = styled.div`
   background-image: url(${sample});
   background-size: cover;
   min-height: 650px; 
   /* padding-bottom:50px;  */
    margin: 50px 0px;
    /* padding-right:50%; */
 
.line{
margin: 20px;
height: 2px;
width: 10%;
background-color: #FDAC03;
}
h4{
   color: #FDAC03;
   font: normal normal normal 22px Segoe UI;
   letter-spacing: 0px;
}
h1{
  font: normal normal 600 40px Titillium Web;
  letter-spacing: 0.35px;
  color: #ffff;
}
.right{
    margin-top:200px;
    p{
     font: normal normal normal 20px Arial;
   letter-spacing: 0px;
   color: #ffff;
   line-height:1.5; 
    }
}
`
export default function SampleContract() {
  return (
    <Contract>

      <Container>
        <Row>
          <Col md={7}>
            <div className='d-flex'>
              <Sample icon={<SiHiveBlockchain className='text-white' />} />
              <Sample icon={<ImFileText2 color='#FDAC03'/>}  bg="white"/>
            </div>
            <div className='d-flex'>
              <Sample icon={<BsChatText color='#FDAC03' />} bg="white"/>
              <Sample icon={<SiHiveBlockchain color='#FDAC03' />} bg="white"/>
            </div>
          </Col>

          <Col md={5} className='right'>
            <div className='d-flex'>
              <h4>Sample Contract</h4>
              <h3 className='line'></h3>
            </div>
            <h1>Start Building</h1>
            <p>lorem Ipsum is simply dummy text of the printing an typesetting industry. Lorem Ipsum has been the<br /> industry's.</p>
          </Col>
        </Row>
      </Container>


    </Contract>
  )
}
