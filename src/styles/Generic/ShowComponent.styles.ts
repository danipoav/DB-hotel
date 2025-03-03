import styled from "styled-components";

export const ShowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: 20px;
  height: 82vh;

  svg {
    position: absolute;
    bottom: 10%;
    right: 5%;
    cursor: pointer;
    color: grey;
    transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
    font-size: 3em;

    &:hover {
      color: black;
      transform: scale(1.2);
    }
  }
`;

export const ShowContainer = styled.div`
  background: #191919;
  box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01),
              0px 105px 63px rgba(0, 0, 0, 0.05),
              0px 47px 47px rgba(0, 0, 0, 0.09),
              0px 12px 26px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border-radius: 25px;
  border: 2px solid grey;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-align: left;
  transition: transform 0.3s ease-in-out, border-color 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    border-color: #109510;
  }
`;

export const Image = styled.img`
  width: auto;
  height: 300px;
  border-radius: 15px;
  margin-bottom: 15px;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  font-size: 16px;
  width: 100%;
  padding: 20px;

  p {
    margin: 5px 0;
    padding: 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    transition: background 0.3s ease-in-out;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  strong {
    color: #109510;
  }
`;

export const InputField = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid grey;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: border 0.3s ease-in-out, background 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #109510;
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const SelectField = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid grey;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transition: border 0.3s ease-in-out, background 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: #109510;
    background: rgba(255, 255, 255, 0.2);
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:not(:checked){
    background-color: black;
  }
`;

export const SaveButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  background: #109510;
  color: #191919;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
  margin: 1em 0;

  &:hover {
    background: #109510;
    transform: scale(1.05);
  }
`;

export const CancelButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 8px;
  background: grey;
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    background: #4d4d4d;
    transform: scale(1.05);
  }
`;
