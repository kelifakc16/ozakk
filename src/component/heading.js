import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import img from '../images/logo.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Header = styled.nav`

.nav_right{
  width: 100%;
  display: flex;
  justify-content: flex-end; 
}


 `
 export const NavLink=styled(Link)`
 color: black;
 text-decoration: none;
 font-size: 18px;
 align-items: center;
 padding: 10px 5px 0px 13px;

  &:hover{
    color:#FDAC03;
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
              width="280"
              height="55"
              alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="nav_right">
              <NavLink to="/"><p>Learn</p></NavLink>
              <NavLink to=""> <p>Sample Contracts</p></NavLink>
              <NavLink to=""><p>Forum</p> </NavLink>
              <NavLink to=""><p>Blog</p> </NavLink>
              <NavLink to="/aboutus"><p>About Us </p></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Header>
  )
}
