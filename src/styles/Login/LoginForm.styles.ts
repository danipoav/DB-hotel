import styled from "styled-components";

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
