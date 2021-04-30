import React,{ useState,useEffect } from 'react';
import styled from 'styled-components';


const MessageWrapper = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 30px;
    margin-left: 85px;
    padding-left: 25px;
    margin-bottom: 20px;
    margin-right: 20px;
    opacity:1;
    transition: all 0.1s;
    font-weight:550;
    display:flex;
    flex-direction:row;
    
    ${({ severity }) => severity==='success' && `
        background-color: rgb(202, 255, 202);
        color:rgb(15, 180, 15);
    `}
    ${({ severity }) => severity==='error' && `
        background-color: rgb(255, 218, 218);
        color:rgb(185, 6, 6);
        border-radius:5px
    `}
    ${({ severity }) => severity==='warning' && `
        background-color: rgb(255, 255, 200);
        color:rgb(201, 171, 0);
        border-radius:5px
    `}
    vertical-align: middle;
    align-items:center;
`

const IconWrapper = styled.div`
    margin-left:85px;
    opacity:1;
    padding:8px;
    padding-top:2px;
    padding-bottom:2px;
    cursor: pointer;
    vertical-align:middle;
    border-radius:90px;
    ${({ severity }) => severity==='success' && `
        border:2px solid rgb(15, 180, 15);
        color:rgb(15, 180, 15);
    `}
    ${({ severity }) => severity==='error' && `
        border:2px solid rgb(185, 6, 6);
        color:rgb(185, 6, 6);
    `}
    ${({ severity }) => severity==='warning' && `
        border:2px solid rgb(201, 171, 0);
        color:rgb(201, 171, 0);
    `}

`


const Toast = ({severity,text}) => {
    const [visible,setVisible] = useState('visible');
            setTimeout(()=>{
                setVisible('hidden')
            },10000)
    return (
        <MessageWrapper severity={severity} style={{visibility:`${visible}`}}>
                <span>{text}</span>
                <IconWrapper severity={severity} onClick={()=>setVisible('hidden')}>X</IconWrapper>
        </MessageWrapper>
    )
}

export default Toast;
