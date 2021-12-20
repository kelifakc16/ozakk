import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components';
import { BsArrowRight, BsChevronDoubleDown } from 'react-icons/bs';
const StyledCard = styled.div`
.doubledown{
    border-radius: 50%; 
    width: 40px;
    height: 40px;
    color:white;
    background-color: #FDDD03;
    display:flex; 
    justify-content: center; 
    align-items: center;
    text-align: center; 
}
.icon{
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: 1px solid black;
}
.icons{
    border-radius: 50%;
    width: 35px;
    height: 35px;
    border: 1px solid black;
}
.outerradius{
    border-radius: 50%;
    border:1px solid #FDDD03;
    width: 55px;
    height: 55px;
   
    display: flex;
    justify-content: center;
    align-items:center;
}
.outerbox{
    display: flex;
    justify-content: center;
    align-items:center;
    border-radius: 50%;
    width: 65px;
    height: 65px;
    background-color: white;
    position: absolute;
    bottom:-32px;
    left:40%;
}
span{
    color:#FDAC03;
    text-transform: uppercase;
    font-size: 12px;
    align-items: center;
}
`
export default function Cards(props) {
    console.log(props.imgscr)
    return (
        <StyledCard>
            <Row>
                <Col className='px-4'>
                    <Card style={{ width: '20rem' }}>
                        <div style={{ position: 'relative' }}>
                            <img
                                style={{ width: '20rem', height: '300px' }}
                                alt="new"
                                src={props.imgscr}
                            />
                            <div className='outerbox'>
                                <div className='outerradius'>
                                    <div className='doubledown'><BsChevronDoubleDown /></div>
                                    </div>
                                    </div>
                                    </div>
                        <Card.Body>
                            <Card.Title className='my-3'>{props.title}</Card.Title>
                            <Card.Text>
                                {props.text}
                            </Card.Text>
                            <span>Read More <BsArrowRight/></span>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </StyledCard>
    )
}
