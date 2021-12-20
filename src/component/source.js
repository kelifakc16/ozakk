import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styled from 'styled-components';
const Stylesource = styled.div`
margin: 50px 0px;
padding: 80px;
h1{
font: normal normal bold 32px Segoe UI;
letter-spacing: 0px;
color: black;
opacity: 1;
text-align: center;
}
p{
    text-align: center;
}`
export default function Source() {
    return (
        <Stylesource>
            <Container>
                <Row>
                    <Col>
                       <h1>Smart Contract Standard</h1> 
                       <p>We provide standard, reusable, and safe smart contracts for the Zilliqa Blockchain. Creating community-wide standard solutions to common issues.</p>
                    </Col>
                    <Col>
                        <h1>Open Source</h1>
                        <p>It is a transparent and community-driven initiative that can be freely accessed, updated, and shared by the general public.</p>
                    </Col>
                    
                    <Col>
                        <h1>Community</h1>
                        <p>Community allows a group of professionals to assist in the growth of the platform by sharing the information.</p>
                    </Col>
                </Row>
            </Container>
        </Stylesource>
    )
}
