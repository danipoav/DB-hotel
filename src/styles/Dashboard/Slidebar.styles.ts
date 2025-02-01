import styled, { keyframes } from "styled-components";

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  align-items: center; 
  height: 96vh; 
  padding: 1em; 
  padding-left: 0;
  color: grey;
  width: 150px;
`

export const LogoContainer = styled.div`
margin-bottom: 9em;
background-color: white;
color: black;
padding:1.2em 1.5em;
border-radius: 20px;
`

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

interface OptionContainerProp {
  current: boolean
}

export const OptionList = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  width: 100%;

`

export const OptionContainer = styled.div<OptionContainerProp>`
cursor: pointer;
width: 8em;
padding: 1.5em 0;
text-align: center;
border-left: ${({ current }) => current ? '5px solid white' : ''};
color: ${({ current }) => current ? 'white' : 'grey'};
position: relative;

&:hover{
    color: white;
    }

    .hover-text {
        position: absolute;
        top: -7px;
        left: 70%;
        opacity: 0;
        background-color: rgba(255, 255, 255, 0.9);
        color: white;
        background-color: black;
        padding: 2em 1em;
        white-space: nowrap;
        border-radius: 10px;
        font-size: 1em;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        font-weight: bold;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
        transform: translateX(10px);
        width: 9em;
        text-align: center;
        z-index: 2;
    }

    &:hover .hover-text {
        animation: ${slideIn} 0.3s ease-in-out forwards;
    }
`



export const LogoutContainer = styled.div`
  margin-top: auto;
  cursor: pointer;
  transition: transform 0.3s;
  color: grey;
  &:hover{
    color: white;
    }
`