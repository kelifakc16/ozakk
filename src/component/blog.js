import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components';
import Cards from './cards';
import img1 from '../images/alphafinance.jpg'
import img2 from '../images/augur.jpg'
import img3 from '../images/cover_audit_uma_4.png'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
const Styleblog = styled.div`
h4{
font: normal normal normal 25px Segoe UI;
letter-spacing: 0px;
color: #FDAC03;
opacity: 1;
}
.line{
margin: 20px;
height: 2px;
width: 4%;
background-color: #FDAC03;
}
h1{
font: normal normal 600 50px Titillium Web;
letter-spacing: 0.35px;
color: black;
padding:5px 0px;
}
p{
 font: normal normal normal 18px Arial;
letter-spacing: 0px;
color: #291B00;
line-height:1.5;
margin-bottom: 20px;
}
.caret{
    display: flex;
    justify-content: center; 
    /* align-items: center;  */
    text-align: center; 
    margin: 250px 110px 0px 0px;
    
}
.backward{
    border-radius: 50%;
    border: 2px solid black;
    height:35px;
    width:35px;
    margin-right: 20px;   
}
.forward{
    border-radius: 50%;
    border: 2px solid black;
    height:40px;
    width:40px
}

`

export default function Blog() {
    console.log("img1", img1)
    return (
        <Styleblog>
            <Container>
                <div className='d-flex'>
                    <h4>Latest Stories</h4>
                    <h3 className='line'></h3>
                </div>
                <h1>Blogs</h1>
                <p>lorem Ipsum is simply dummy text of the printing an <br></br>
                    typesetting industry. Lorem Ipsum has been the<br></br> industry's.</p>
                <Row>
                    <Col className='caret'>
                        <div className='backward'><FaCaretLeft /></div>
                        <div className='forward'><FaCaretRight /></div>
                    </Col>
                    <Col>
                        <div className='d-flex my-4'>
                            <Cards imgscr={img1}
                                title='Alpha Finance Homora V2 Audit'
                                text='The Alpha Finance Lab team asked us to review and audit their Homora V2 smart contracts. We looked at the code and now…' />
                            <Cards imgscr={img2}
                                title='Alpha Finance Homora V2 Audit'
                                text='The Alpha Finance Lab team asked us to review and audit their Homora V2 smart contracts. We looked at the code and now…' />
                            <Cards imgscr={img3}
                                title='Alpha Finance Homora V2 Audit'
                                text='The Alpha Finance Lab team asked us to review and audit their Homora V2 smart contracts. We looked at the code and now…' />
                        </div>
                    </Col>
                </Row>
            </Container>

        </Styleblog>
    )
}
