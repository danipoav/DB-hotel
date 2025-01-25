import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    margin-bottom: auto;
    height: 80vh;
    text-align: end;
    overflow: auto;

    &::-webkit-scrollbar {
  width: 10px;
}

&::-webkit-scrollbar-track {
  background: white;
}

&::-webkit-scrollbar-thumb {
  background: #c2c2c2; 
  border-radius: 6px;
}

&::-webkit-scrollbar-thumb:hover {
  background: grey; 
}

`

export const Content = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 20px;
    text-align: start;
    padding: 0 1em;
`

export const Name = styled.h3`
    margin: 0;
    font-size: 1em;
    color: #262626;
`;

export const ID = styled.p`
    margin: 0;
    font-size: 0.8em;
    color: #9E9E9E;
`;

interface TextProps {
    status: string
}

export const Text = styled.p<TextProps>`
    font-size: 0.8em;
    color: #393939;;
    ${(props) => {
        if (props.status === 'Active') return `color:#5AD07A;text-transform:uppercase`;
        if (props.status === 'Inactive') return `color:#E23428;text-transform:uppercase`;
        if (props.status === 'Available') return `background-color:#5AD07A;padding: 10px 25px;border-radius: 10px;color:white;width: 150px;text-transform:uppercase;text-align:center;`;
        if (props.status === 'Booked') return `background-color:#E23428;padding: 10px 25px;border-radius: 10px;color:white;width: 150px;text-transform:uppercase;text-align:center;`;
        if (props.status === 'Paid') return `color:#5AD07A;text-transform:uppercase`;
        if (props.status === 'Pending') return `color:#F4BB44;text-transform:uppercase`;
        if (props.status === 'Refunded') return `color:#E23428;text-transform:uppercase`;
    }};
`

export const TextPrice = styled.p`
    color: #393939;
    width: 100px;
    font-weight: bold;

    span{
        color: #799283;
        font-weight: normal;
        font-size: 12px;
    }
`

export const ButtonCreate = styled.button`
    border: none;
    background-color: black;
    color: white ;
    padding: 10px 35px;
    outline: none;
    border-radius: 10px;
    margin-bottom: 1em;
    margin-right: 1em;
    cursor: pointer;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: right;
    svg{
        margin-left: 8px;
    }
`

export const Tr = styled.tr`

`

export const Th = styled.th`
text-align:left;
padding: 20px 10px;
border-bottom: 1px solid black;
`

export const Td = styled.td`
    padding:10px;
    border-bottom: 1px solid #9E9E9E;
    text-align: left;
`

export const Ul = styled.ul`
    list-style: none;
    text-align: left;
    display: flex;
    padding: 0;
    margin: 0;
    margin-bottom: 1em;
`

interface LiProps {
    active: boolean
}

export const Li = styled.li<LiProps>`
    padding: 10px 20px;
    cursor: pointer;
    color: ${({ active }) => (active ? 'black' : '#C5C5C5')};
    border-bottom: ${({ active }) => (active ? '2px solid black' : '2px solid #C5C5C5')};
    transition: color 0.3s, border-bottom 0.3s;
    
    &:hover {
        color: ${({ active }) => (active ? 'black' : '#6E6E6E')};
    }
`

//Loading styles
const textAnimation = keyframes`
  0% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }
  40% {
    letter-spacing: 2px;
    transform: translateX(26px);
  }
  80% {
    letter-spacing: 1px;
    transform: translateX(32px);
  }
  90% {
    letter-spacing: 2px;
    transform: translateX(0px);
  }
  100% {
    letter-spacing: 1px;
    transform: translateX(0px);
  }
`;

const loadingAnimation = keyframes`
  0% {
    width: 16px;
    transform: translateX(0px);
  }
  40% {
    width: 100%;
    transform: translateX(0px);
  }
  80% {
    width: 16px;
    transform: translateX(64px);
  }
  90% {
    width: 100%;
    transform: translateX(0px);
  }
  100% {
    width: 16px;
    transform: translateX(0px);
  }
`;

const loading2Animation = keyframes`
  0% {
    transform: translateX(0px);
    width: 16px;
  }
  40% {
    transform: translateX(0%);
    width: 80%;
  }
  80% {
    width: 100%;
    transform: translateX(0px);
  }
  90% {
    width: 80%;
    transform: translateX(15px);
  }
  100% {
    transform: translateX(0px);
    width: 16px;
  }
`;

export const LoadingContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 40vh;
`

export const LoaderText = styled.span`
  position: absolute;
  top: 0;
  padding: 0;
  margin: 0;
  color: black;
  animation: ${textAnimation} 3.5s ease both infinite;
  font-size: .8rem;
  letter-spacing: 1px;
`

export const Loader = styled.div`
    width: 80px;
    height: 50px;
    position: relative;
`



export const Load = styled.span`
background-color: black;
  border-radius: 50px;
  display: block;
  height: 16px;
  width: 16px;
  bottom: 0;
  position: absolute;
  transform: translateX(64px);
  animation: ${loadingAnimation} 3.5s ease both infinite;

  &::before{
    position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: #c2c2c2;
  border-radius: inherit;
  animation: ${loading2Animation} 3.5s ease both infinite;
  }
`