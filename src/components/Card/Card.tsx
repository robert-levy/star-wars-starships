import {
  Wrapper,
  LeftSection,
  RightSection,
  SpaceshipName,
  SpaceshipSpec,
  ApperancesIcon,
  SpaceshipImg
} from "./CardStyled";
import { IStarshipData } from "../../interfaces";

const Card = ({ data }: { data: IStarshipData }) => {
  //   console.log(data);

  return (
    <Wrapper>
      <LeftSection>
        <SpaceshipImg src={data.image} alt="spaceship image" />
      </LeftSection>
      <RightSection>
        <SpaceshipName>{data.name}</SpaceshipName>
        <SpaceshipSpec>Model: {data.model}</SpaceshipSpec>
        <SpaceshipSpec>Film Features: {data.films.length}</SpaceshipSpec>
        <SpaceshipSpec>Crew: {data.crew}</SpaceshipSpec>
        {data.mostAppearancesIcon && <ApperancesIcon src={data.mostAppearancesIcon} width="100px" height="auto"/>}
      </RightSection>
    </Wrapper>
  );
};

export default Card;
