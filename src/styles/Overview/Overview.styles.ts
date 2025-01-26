import styled from "styled-components";

export const ContainerData = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
  padding: 2em 0;
  width: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
  width: 10px;
  height: 10px;
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
`;

export const Data = styled.div`
  display: flex;
  align-items: center; 
  gap: 15px; 
  padding: 16px;
  background-color: black;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 300px;
  min-height: 100px;
`;

export const DataText = styled.div`
  display: flex;
  flex-direction: column; 
  text-align: left; 
  color: white;
`;

export const Title = styled.h4`
  font-size: 1.2rem;
  margin: 0;
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: #777;
`;

//Black Graphic

export const ContainerCardCharts = styled.div`
  position: relative;
  width: 48%;
  height: 335px;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255),
    rgba(255, 255, 255, 0.1)
  );
  border-radius: 32px;
  box-shadow: 0 0px 80px -10px rgba(255, 255, 255, 0.15);

  &::before {
    position: absolute;
    content: "";
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
    background-color: #777777;
    z-index: -10;
    filter: blur(70px);
  }
`;

export const CardCharts = styled.div`
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center, #1b1b1b, #000000);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const ChartsLines = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  i {
    position: absolute;
    inset: 0;
    display: flex;
    width: 100%;
    height: 100%;
  }
`;

export const Lines = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: space-between;

  span {
    width: 1.5px;
    height: 100%;
    margin: 0 18px;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.025) 50%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export const TagsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const Radio = styled.label`
 
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    border-radius: 12px;
    color: #a7a7a7;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 8px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      color: #ffffff;
    }

    input {
      display: none;
    }

    .name {
      width: 100%;
      padding: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
      z-index: 1;

      input:checked + & {
        color: #ffffff;
        background: linear-gradient(15deg, #898989, #181818, #000000);
        transform: scale(1.1);

        &::before {
          position: absolute;
          background-color: #212121;
          content: "";
          inset: 1px;
          z-index: -1;
          border-radius: 12px;
        }
      }
    }
  
  `

export const MainTexts = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  font-weight: 500;

  .title {
    background-image: linear-gradient(to top left, #92400e, #f9d86d, #a6a6a6);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .change {
    background-image: linear-gradient(to right, #8e1414, #ffffff, #ffffff);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
`;

//Blue Graph 

export const GraphContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2em;
  justify-content: space-between;
`

export const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 20rem;
  border-radius: 1rem;
  background-color: #0f172a;
  padding: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  width: 48%;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 20px rgba(99, 102, 241, 0.2);
  }
`;

export const GradientOverlay = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  background: linear-gradient(to right, #6366f1, #a855f7, #ec4899);
  opacity: 0.2;
  filter: blur(4px);
  transition: opacity 0.3s ease;

  ${CardContainer}:hover & {
    opacity: 0.3;
  }
`;

export const InnerBackground = styled.div`
  position: absolute;
  inset: 1px;
  border-radius: 0.6875rem;
  background-color: #0f172a;
`;

export const ContentWrapper = styled.div`
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background: linear-gradient(to bottom right, #6366f1, #a855f7);
`;

export const Icon = styled.svg`
  width: 1rem;
  height: 1rem;
  color: #ffffff;
  width: 49%;
`;

export const TitleGraphic = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
`;

export const StatusBadge = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: rgba(16, 185, 129, 0.1);
  color: #10b981;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const StatCard = styled.div`
  background-color: rgba(15, 23, 42, 0.5);
  border-radius: 0.5rem;
  padding: 0.75rem;
`;

export const StatLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: #94a3b8;
`;

export const StatValue = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
`;

export const StatChange = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: #10b981;
`;

export const ChartContainer = styled.div`
  height: 6rem;
  width: 100%;
  overflow: hidden;
  background-color: rgba(15, 23, 42, 0.5);
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin-bottom: 1rem;
`;

export const Chart = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
  gap: 0.25rem;
`;

export const Bar = styled.div`
  width: 0.75rem;
  border-radius: 0.125rem;
  background-color: rgba(99, 102, 241, 0.3);

  & > div {
    width: 100%;
    border-radius: 0.125rem;
    background-color: #6366f1;
    transition: height 0.3s ease;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const FooterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: linear-gradient(to right, #6366f1, #a855f7);
  color: #ffffff;
  padding: 0.25rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #4f46e5, #9333ea);
  }
`;

export const FooterIcon = styled.svg`
  width: 0.75rem;
  height: 0.75rem;
`;