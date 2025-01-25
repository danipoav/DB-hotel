import styled from "styled-components";

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  align-items: center; 
  height: 96vh; 
  padding: 1em; 
  padding-left: 0;
  color: grey;
  width: 100%;
  max-width: 150px;
`

export const LogoContainer = styled.div`
margin-bottom: 9em;
background-color: white;
color: black;
padding:1.2em 1.5em;
border-radius: 20px;
`

interface OptionContainerProp {
  active: boolean
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
max-width: 8em;
padding: 1.5em 0;
text-align: center;
border-left: ${({ active }) => active ? '5px solid white' : ''};
color: ${({ active }) => active ? 'white' : 'grey'};

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