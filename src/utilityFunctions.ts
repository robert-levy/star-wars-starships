import shipImg from "./assets/starwars-ship.jpg";
import mostAppearancesIcon from "./assets/most-appearances-icon.svg";
import { IStarshipData, IDataResponse } from "./interfaces";

/**
 *
 * @param APIResponse the full data we get back from the API
 * @returns The APIResponse, but with the image field set to either a string or null
 */
export const transFormData = (APIResponse: IDataResponse): IDataResponse => {
  // sort/remove by crew
  const sortedResponse = sortRemoveByCrew(APIResponse.results);
  APIResponse.results = sortedResponse;

  //
  // add image property TODO: could use recordMapType here maybe
  APIResponse.results.forEach((starship) => {
    starship["image"] = shipImg;
  });

  // Add icon to ships that appeared in most films
  const maxCrew = findMaxCrew(APIResponse.results);
  APIResponse.results.forEach((starship) => {
    if (starship.films.length === maxCrew)
      starship["mostAppearancesIcon"] = mostAppearancesIcon;
  });
  console.log(maxCrew);
  return APIResponse;
};

/**
 *
 * @param starships array of starships
 * @returns number of ship with the most crew
 */
const findMaxCrew = (starships: IStarshipData[]) =>
  starships.reduce((max, starship) => Math.max(max, starship.films.length), 0);

/**
 *
 * @param results an array of starships
 * @returns an array of starships only with crew < 10 and sorted by crew in ascending order
 */
export const sortRemoveByCrew = (results: IStarshipData[]) => {
  const filteredResponse = results.filter((spaceship) => {
    let numOfCrew = spaceship.crew;
    if (numOfCrew.includes("-")) numOfCrew = numOfCrew.split("-")[0]; // if crew is a range, get the min value
    return parseInt(spaceship.crew) < 10;
  });
  const sortedResponse = filteredResponse.sort((a, b) => +b.crew - +a.crew);
  return sortedResponse;
};
