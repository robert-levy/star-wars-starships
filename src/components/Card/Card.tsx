import React from "react";
import {
  Wrapper,
  LeftSection,
  RightSection,
  SpaceshipName,
  SpaceshipSpec,
  Img
} from "./CardStyled";
import { IStarshipData } from "../../interfaces";

const Card = ({ data }: { data: IStarshipData }) => {
  //   console.log(data);

  return (
    <Wrapper>
      <LeftSection>
        <img src={data.image} alt="spaceship image" width="90%" height="100%" />
      </LeftSection>
      <RightSection>
        <SpaceshipName>{data.name}</SpaceshipName>
        <SpaceshipSpec>Model: {data.model}</SpaceshipSpec>
        <SpaceshipSpec>Film Features: {data.films.length}</SpaceshipSpec>
        <SpaceshipSpec>Crew: {data.crew}</SpaceshipSpec>
        {data.mostAppearancesIcon && <Img src={data.mostAppearancesIcon} width="100px" height="auto"/>}
      </RightSection>
    </Wrapper>
  );
};

export default Card;
