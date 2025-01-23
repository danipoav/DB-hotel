import styled from "styled-components";

export const SlideContent = styled.div`
display: flex;
  flex-direction: column; 
  justify-content: space-between;
  align-items: center; 
  height: 96vh; 
  padding: 1em; 
  width: 150px;
  padding-left: 0;
  color: grey;
`

export const LogoContainer = styled.div`
margin-bottom: 9em;
background-color: white;
color: black;
padding:1.2em 1.5em;
border-radius: 20px;
`

export const OptionList = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  gap: 4em;
  width: 100%;
 
`

export const OptionContainer = styled.div`
cursor: pointer;
width: 100%;
padding: 0.5 0;
text-align: center;
&:hover{
    color: white;
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