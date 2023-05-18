import { useState } from "react";
import { useData } from "../../Provider/Provider";
import { Wrapper, LoadMoreButton } from "./SpaceshipListStyled";
import { IStarshipData } from "../../interfaces";
import Card from "../Card/Card";

const SpaceshipList = () => {
  const { data, nextPage } = useData();
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = () => {
    setIsLoading(!isLoading);
  };

  return (
    <Wrapper>
      {data.map((spaceship: IStarshipData, index: number) => (
        <Card key={index} data={spaceship} />
      ))}
      {nextPage && (
        <LoadMoreButton
          onClick={handleOnClick}
          className={isLoading ? "loading" : ""}
        >
          {!isLoading && <>Load more ...</>}
        </LoadMoreButton>
      )}
    </Wrapper>
  );
};

export default SpaceshipList;
