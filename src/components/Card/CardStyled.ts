import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  text-align:left;
  transition: transform 0.3s ease-in-out;
  max-width: 600px;
  &:hover {
    transform: translateY(-4px);
  }
`;

export const LeftSection = styled.div`
  width: 50%;
`;

export const RightSection = styled.div`
  width: 50%;
`;

export const SpaceshipImg = styled.img`
width: 90%;
height: 100%
@media (max-width: 768px) {
  height: 50%;
  width: 100%;

`

export const SpaceshipName = styled.h1`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: bold;
  text-align:center;
  color: #fee84c;
`;

export const SpaceshipSpec = styled.p`
font-family: "Roboto", sans-serif;
font-size: 16px;
color: #fee84c;
`

export const ApperancesIcon = styled.img`
    
    `
