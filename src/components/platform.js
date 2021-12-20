import React from 'react'
import styled from 'styled-components';

export default function Platform(props) {
    const Styleplatform = styled.div`
    .box{
        border:1px solid #05455042;
        margin:10px;
        padding:35px;
}  
`
    return (
        <Styleplatform>
            <div className='box'>
                <img src={props.imgscr} alt='image' height='80px' width='180px' /></div>
        </Styleplatform>
    )
}
