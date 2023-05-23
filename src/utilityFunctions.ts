import shipImg from "./assets/starwars-ship.jpg";
import mostAppearancesIcon from "./assets/most-appearances-icon.svg";
import { IStarshipData, IDataResponse } from "./interfaces";

/**
 *
 * @param starships the full data we get back from the API
 * @returns The APIResponse, but with the image field set to either a string or null
 */
export const transFormData = (starships: IStarshipData[]): IStarshipData[] => {
  // sort/remove by crew
  const sortedStarships = sortRemoveByCrew(starships);

  //
  // add image property TODO: could use recordMapType here maybe
  sortedStarships.forEach((starship) => {
    starship["image"] = shipImg;
  });

  // Add icon to ships that appeared in most films
  const maxAppearances = findMaxAppearances(sortedStarships); 
  sortedStarships.forEach((starship) => {
    if (starship.films.length === maxAppearances)
      starship["mostAppearancesIcon"] = mostAppearancesIcon;
  });

  return sortedStarships;
};

/**
 *
 * @param starships array of starships
 * @returns number of ship with the most crew
 */
const findMaxAppearances = (starships: IStarshipData[]) =>
  starships.reduce((max, starship) => Math.max(max, starship.films.length), 0);

/**
 *
 * @param starships an array of starships
 * @returns an array of starships only with crew < 10 and sorted by crew in ascending order
 */
export const sortRemoveByCrew = (starships: IStarshipData[]) => {
  const filteredResponse = starships.filter((spaceship) => {
    let numOfCrew = spaceship.crew;
    if (numOfCrew.includes("-")) numOfCrew = numOfCrew.split("-")[0]; // if crew is a range, get the min value
    return parseInt(spaceship.crew) < 10;
  });
  const sortedStarships = filteredResponse.sort((a, b) => +b.crew - +a.crew);
  return sortedStarships;
};
