import styled from "styled-components";

export const FormWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #0c0f14;
`;

export const Form = styled.form`
  background: #0c0f14;
  box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01),
    0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09),
    0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  padding: 20px;
  border-radius: 25px;
  max-width: 700px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: relative;

  &:has(input:focus) span {
    color: #d17842;
  }
`;

export const Title = styled.span`
  padding: 0 10px;
  font-size: 12px;
  color: #8b8e98;
  font-weight: 600;
  background: #0c0f14;
  position: relative;
  top: 14px;
  left: 15px;
  transition: all 300ms;
`;

export const InputField = styled.input`
  height: 50px;
  text-indent: 15px;
  border-radius: 15px;
  outline: none;
  background-color: transparent;
  border: 1px solid #21262e;
  transition: all 0.3s;
  caret-color: #d17842;
  color: #aeaeae;

  &:hover {
    border-color: rgba(209, 121, 66, 0.5);
  }

  &:focus {
    border-color: #d17842;
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
  background: #d17842;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: #d17842;
    border: 2px solid #d17842;
    background: transparent;
  }

  &:active {
    scale: 0.95;
  }
`;

export const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;