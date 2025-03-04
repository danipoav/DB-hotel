import styled from "styled-components";

export const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding-bottom: 1em;
`

export const TopTitle = styled.h1`
    font-size: 2em;
    font-weight: bold;
    letter-spacing: 5px;
    text-transform: uppercase;
`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: #C5C5C5;
  padding: 0.5em;
  padding-right: 1em;
  border-radius: 30px;
  margin-right: 3em;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid white;
  object-fit: cover;
`;

export const ProfileName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  font-family: "Inter", sans-serif;
`;
