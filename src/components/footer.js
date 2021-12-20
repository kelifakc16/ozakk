import React from 'react'
import styled from 'styled-components';
import logo from '../images/logo-dark.svg'
import img from '../images/footer.svg'
const FooterContainer = styled.footer`
   background-image: url(${img});
   background-size: cover;
   padding-top: 100px;
   margin-top: -150px;
   
  `
const FooterWrap = styled.div`
  padding:48px 60px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  `
const FooterLinksContainer = styled.div`
  display:flex;
  justify-content:center;
  `
const FooterLinksWrapper = styled.div`
  display:flex;
  margin-right: auto;

  `
const FooterLinkItems = styled.div`

  display:flex;
  flex-direction:column;
  align-items:flex-start;
  color:black;
  margin-left: auto;
  `

const FooterLinkTitle = styled.h1`
  font: normal normal 600 30px Titillium Web;
  letter-spacing: 0.2px;
  margin-left: 80px;
  color: #ffff;
  `
const FooterLink = styled.ul` 
   color:black;
   text-decoration:none;
   margin-bottom:25px;
   font: normal normal normal 17px Arial;
   letter-spacing: 0px;
   margin-left: 50px;
   color: #ffff;
   `
const FooterLine = styled.div`
   background: transparent linear-gradient(90deg, #FFFFFF00 0%, #FFFFFF 50%, #01111300 100%) 0% 0% no-repeat padding-box;
   border: 1.5px solid #707070;
   opacity: 0.34;
   width: 80%;
   margin: auto;
   `
const WebsiteRight = styled.small`
   color: black;
   font: normal normal normal 20px Arial;
   margin:auto;
   padding-top: 15px;
   color: #FFFFFF;
   opacity: 0.69;
   `
const WebsiteLogo = styled.div`
 img{
   height: 80px;
   width: 190px;
 }
   `
 
export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <WebsiteLogo>
              <img src={logo} />
            </WebsiteLogo>
            <FooterLinkItems>
              <FooterLinkTitle>Docs</FooterLinkTitle>
              <FooterLink to="/">Getting Started</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Company</FooterLinkTitle>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/">Getting Started</FooterLink>
              <FooterLink to="/">Learn</FooterLink>
              <FooterLink to="/">Fourm</FooterLink>
              <FooterLink to="/">About Us</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Community</FooterLinkTitle>
              <FooterLink to="/">Discord</FooterLink>
              <FooterLink to="/">Stack Overflow</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>More</FooterLinkTitle>
              <FooterLink to="/">Blog</FooterLink>
              <FooterLink to="/">Github</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <FooterLine></FooterLine>
        <WebsiteRight>Copyright © 2010-2021 Open Zeepline Company S.L. All rights reserved</WebsiteRight>
      </FooterWrap>
    </FooterContainer>
  )
}
