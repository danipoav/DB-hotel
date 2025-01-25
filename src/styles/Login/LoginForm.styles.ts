import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #1c1c1e; 
  width: 100%;
  height: 100vh;
  padding: 20px; 
`;

export const Login = styled.form`
  margin: auto;
  text-align: center;
  border: 1px solid #333;
  border-radius: 8px;
  padding:3em 2em; 
  background-color: #2c2c2e;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  width: 450px;
`;

export const Title = styled.h1`
  font-size: 2em; 
  color: lightgrey; 
  margin-bottom: 1em;
  text-align: center; 
  padding-bottom: 0.5em;
  font-weight: bold; 
  border-bottom: 1px solid lightgray;
`;


export const DivGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px; 
  border: 1px solid #555; 
  border-radius: 8px;
  padding: 8px; 
  background-color: #3a3a3c;

  svg {
    margin:0 12px;
    color: #34c759; 
    font-size: 1.2em; 
  }
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  outline: none;
  background-color: #3a3a3c;
  color: #fff; 
  font-size: 1em; 
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: green;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
  margin-top: 15px;
  margin-bottom: 1em;

  &:hover {
    background-color:#32CD32;
  }
`;

export const Text = styled.p`
color: lightgrey;
`

//Loading styles
const loadingAnimation = keyframes`
0% {
    width: 0;
  }
  80% {
    width: 100%;
  }
  100% {
    width: 100%;
  }
`

const blinkAnimation = keyframes`
0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`
export const LoaderText = styled.div`
  color: white;
  font-size: 14pt;
  font-weight: 600;
  margin-left: 10px;
`
export const Dot = styled.span`
  margin-left: 3px;
  animation: ${blinkAnimation} 1.5s infinite;

  &:nth-child(2){
    animation-delay: 0.3s;
  }
  &:nth-child(3){
    animation-delay: 0.6s;
  }
`
export const LoaderBarBackground = styled.div`
  display: flex;
  --height: 30px;
  align-items: center;
  box-sizing: border-box;
  padding: 5px;
  width: 200px;
  height: var(--height);
  background-color: white;
  box-shadow: #0c0c0c -2px 2px 4px 0px inset;
  border-radius: calc(var(--height) / 2);
`
export const LoaderBar = styled.div`
  --height:20px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 0%;
  height: var(--height);
  overflow: hidden;
  background: black;
  border-radius: calc(var(--height) / 2);
  animation: ${loadingAnimation} 1s ease-out infinite;
`
export const LoaderBarContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 18px;
`
export const LoaderBarColor = styled.div`
 background: white;
  width: 10px;
  height: 45px;
  opacity: 0.3;
  rotate: 45deg;
`