import styled from "styled-components";

export const FormWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color:white;
  border-radius: 20px;
  height: 82vh;

  svg{
    position: absolute;
    bottom: 10%;
    right: 5%;
    cursor: pointer;
    color: grey;
    transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;;
    font-size: 3em;

    &:hover{
      color: black;
      transform: scale(1.2);
    }
  }
`;

export const Form = styled.form`
  background: #191919;
  box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01),
    0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09),
    0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  padding: 20px;
  border-radius: 25px;
  max-width: 700px;
  border: 2px solid grey;
`;

interface LabelProps {
  photo: string
}

export const Label = styled.label<LabelProps>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;
  min-width: 20em;
  width:100%;
  grid-column: ${({ photo }) => photo === 'Photo' ? 'span 2' : ''};

  &:has(input:focus) span {
    color: #48d1cc;
  }
`;

export const Title = styled.span`
  padding: 0 10px;
  color: white;
  font-weight: 600;
  background: #191919;
  position: relative;
  top: 16px;
  left: 15px;
  transition: all 300ms;
  width: fit-content;
`;

export const InputField = styled.input`
  height: 50px;
  text-indent: 15px;
  border-radius: 15px;
  outline: none;
  background-color: transparent;
  border: 1px solid grey;
  transition: all 0.3s;
  caret-color: #d17842;
  color: #aeaeae;
  

  &:hover {
    border-color: grey;
  }

  &:focus {
    border-color: #48d1cc;
  }
`;

export const CheckoutButton = styled.input`
  grid-column: span 2;
  margin-top: 20px;
  padding: 20px 0;
  border-radius: 25px;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  border: none;
  background: black;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    color: #48d1cc;
    border: 2px solid #48d1cc;
    background: transparent;
  }

`;

export const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

interface SelectProps {
  name: string
}

export const Select = styled.select<SelectProps>`
  height: 50px;
  text-indent: 15px;
  border-radius: 15px;
  outline: none;
  background-color: transparent;
  border: 1px solid grey;
  transition: all 0.3s;
  color: #aeaeae;
`