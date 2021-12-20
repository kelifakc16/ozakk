import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Form from './form';
import styled from 'styled-components';
const Styleenroll = styled.div`
  height:650px;
  background:linear-gradient(310deg, #F69722 0%, #EA4C10 100%) 0% 0%;
  margin-top:60px;
.line{
 margin: 20px;
 height: 2px;
 width: 4%;
 background-color: #FFFFFF;
}
.text{
 font: normal normal normal 25px Segoe UI;
 letter-spacing: 0px;
 color: #FFFFFF;
}
h1{
 color: #FFFFFF;
 font: normal normal 600 50px Titillium Web;
 letter-spacing: 0.4px;   
}
p{
 font: normal normal normal 18px Arial;
 letter-spacing: 0px;
 color: #FFFFFF;
 line-height:1.5;
}
.left{
 margin-top:150px;
}
`
export default function Enroll() {
    return (
        <Styleenroll>
            <Container>
                <Row>
                    <Col md={5}>
                        <div className='d-flex left'>
                            <span className='text'>Let's Talk</span>
                            <span className='line'></span>
                        </div>
                        <h1>Want To Get Involved?</h1>
                        <p>lorem Ipsum is simply dummy text of the printing an <br />typesetting industry. Lorem Ipsum has been the<br /> industry's.</p>
                    </Col>
                    <Col md={5}>
                        <Form />
                    </Col>
                </Row>
            </Container>
            
        </Styleenroll>
    )
}
