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
  min-width: 500px;
  max-width: 600px;
  min-height: 200px;
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

export const Img = styled.img`
    position: relative;
    left: 60%;
    bottom: 40%;
    `
