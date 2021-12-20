import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import img from '../images/logo.svg';
import styled from 'styled-components';
const Header = styled.nav`

.nav_right{
  width: 100%;
  display: flex;
  justify-content: flex-end; 
}

 `
const StyledLink=styled(Nav.Link)`
p{
color: #3D2B01;
font: normal normal normal 15px Arial;
}

`


export default function Heading() {

  return (
    <Header>
      <Navbar>
        <Container>
          <Navbar.Brand href="#">
            <img
              src={img}
              width="300"
              height="80"
              alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="nav_right">
              <StyledLink href=""><p>Learn</p></StyledLink>
              <StyledLink href=""> <p>Sample Contracts</p></StyledLink>
              <StyledLink href=""><p>Forum</p> </StyledLink>
              <StyledLink href=""><p>Blog</p> </StyledLink>
              <StyledLink href=""><p>About Us </p></StyledLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Header>
  )
}
