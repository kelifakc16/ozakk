import React from 'react'
import styled from 'styled-components';
const Layout = styled.div`
width: 400px;
height: 400px;
background:#291B00;
box-shadow: 0px 23px 78px #00000026;
margin:55px 0px 0px 110px;

.signup-form{
    /* padding: 10px; */
  box-shadow:15px -15px #F2BB83; 
  width: 400px;
  height: 380px;
  display: flex;
  flex-direction:column;
}
input{
   border:0px;
   background-color:transparent;
   border-bottom:2px solid #F69722;
   width: 80%;
   margin:auto;
   height:50px;
   font-size: 13px;
   font-weight: 200;
  
   ::-webkit-input-placeholder{
    color: #ffffff;
}
}

.texts{
    margin-top: -15px;
    font-size: 13px;
   font-weight: 200;
  
   ::-webkit-input-placeholder{
    color: #F69722;
}
    
}
textarea{
    height:100px;
    width: 80%;
    background-color: #D6F9FF24;
    border: 1px solid #D6F9FF36;
    font-size: 10px;
   align-self: center;
   margin-bottom: 25px;
   padding: 6px;
   ::-webkit-input-placeholder{
    color: #ffffff;
}
}
button{
    background-color:transparent;
    border:2px solid #F69722;
    height:35px;
    width: 90px;
    color:#F69722;
    margin-left: 40px;
    text-transform: uppercase;
    font-size: 13px;
}

`
export default function Form() {
    return (
        <Layout>
            <div className='signup-form'>
                <input type="text" name="name" placeholder='Your Name'/>
                <input type="text" name="name" placeholder='Mail Address' className='texts'/>
                <textarea name="Text1" cols="40" rows="5" placeholder='Add Description...' ></textarea>
                <button>Send</button>
            </div>

        </Layout>
    )
}
