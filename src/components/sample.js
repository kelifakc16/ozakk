import React from 'react'
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';
const Stylesample = styled.div`
   height:250px;
   width:280px;
   box-shadow: 0px 11px 15px #0000001A;
   border: 1px solid #05455042;
   margin-top:50px;
   background: transparent linear-gradient(134deg, #EA1010 0%, #FDAC03 100%) 0% 0% no-repeat padding-box;
   margin-left:30px;
   font-size:35px;
   padding:20px;


h2{
  font: normal normal 600 14px Titillium Web;
  letter-spacing: 0px;
  color: #FFFFFF;
  padding:5px 0px;
}
 p{
  font: normal normal normal 10px Arial;
  letter-spacing: 0px;
  color: #FFFFFF;
  line-height:1.5;
} 
 span{
  font: normal normal normal 14px Arial;
  letter-spacing: 0.16px;
  color: #FFFFFF;
} 

`
const StyleWhitesample = styled.div`
   height:250px;
   width:280px;
   box-shadow: 0px 11px 15px #0000001A;
   border: 1px solid #05455042;
   margin-top:50px;
   background-color:white;
   /* background: transparent linear-gradient(134deg, #EA1010 0%, #FDAC03 100%) 0% 0% no-repeat padding-box; */
   margin-left:30px;
   font-size:35px;
   padding:20px;


h2{
  font: normal normal 600 14px Titillium Web;
  letter-spacing: 0px;
  color: black;
  padding:5px 0px;
}
 p{
  font: normal normal normal 10px Arial;
  letter-spacing: 0px;
  color: black;
  line-height:1.5;
} 
 span{
  font: normal normal normal 14px Arial;
  letter-spacing: 0.16px;
  color: #FDAC03;
} 

`

export default function Sample(props) {
  console.log(props.bg)
  return (
    <>
      {
        props.bg == "white" ?
          <StyleWhitesample>
            {props.icon}
            <h2>Alpha Finance Homora V2 Audit</h2>
            <p>The Alpha Finance Lab team asked us to review and audit their Homora V2 smart contracts. We looked at the code and now…</p>
            <span>Read More <BsArrowRight /></span>
          </StyleWhitesample> :
          <Stylesample>
            {props.icon}
            <h2>Alpha Finance Homora V2 Audit</h2>
            <p>The Alpha Finance Lab team asked us to review and audit their Homora V2 smart contracts. We looked at the code and now…</p>
            <span>Read More <BsArrowRight /></span>
          </Stylesample>

      }
    </>
  )
}
