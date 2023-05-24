import { render, RenderResult } from "@testing-library/react";
import { vi } from "vitest";
import Provider from "../Provider/Provider";
import { StateContext } from "../Provider/Provider";
import SpaceshipList from "../components/SpaceshipList/SpaceshipList";

let wrapper: RenderResult;
let wrapperWithContext: RenderResult;

beforeEach(() => {
  wrapper = render(
    <Provider>
      <SpaceshipList />
    </Provider>
  );
  wrapperWithContext = render(
    <StateContext.Provider
      value={{
        data: [
          {
            name: "Rebel transport",
            model: "GR-75 medium transport",
            manufacturer: "Gallofree Yards, Inc.",
            cost_in_credits: "unknown",
            length: "90",
            max_atmosphering_speed: "650",
            crew: "6",
            passengers: "90",
            cargo_capacity: "19000000",
            consumables: "6 months",
            hyperdrive_rating: "4.0",
            MGLT: "20",
            starship_class: "Medium transport",
            pilots: [],
            films: [
              "https://swapi.dev/api/films/2/",
              "https://swapi.dev/api/films/3/",
            ],
            created: "2014-12-15T12:34:52.264000Z",
            edited: "2014-12-20T21:23:49.895000Z",
            url: "https://swapi.dev/api/starships/17/",
            image: "/src/assets/starwars-ship.jpg",
          },
          {
            name: "Sentinel-class landing craft",
            model: "Sentinel-class landing craft",
            manufacturer: "Sienar Fleet Systems, Cyngus Spaceworks",
            cost_in_credits: "240000",
            length: "38",
            max_atmosphering_speed: "1000",
            crew: "5",
            passengers: "75",
            cargo_capacity: "180000",
            consumables: "1 month",
            hyperdrive_rating: "1.0",
            MGLT: "70",
            starship_class: "landing craft",
            pilots: [],
            films: ["https://swapi.dev/api/films/1/"],
            created: "2014-12-10T15:48:00.586000Z",
            edited: "2014-12-20T21:23:49.873000Z",
            url: "https://swapi.dev/api/starships/5/",
            image: "/src/assets/starwars-ship.jpg",
          },
          {
            name: "Millennium Falcon",
            model: "YT-1300 light freighter",
            manufacturer: "Corellian Engineering Corporation",
            cost_in_credits: "100000",
            length: "34.37",
            max_atmosphering_speed: "1050",
            crew: "4",
            passengers: "6",
            cargo_capacity: "100000",
            consumables: "2 months",
            hyperdrive_rating: "0.5",
            MGLT: "75",
            starship_class: "Light freighter",
            pilots: [
              "https://swapi.dev/api/people/13/",
              "https://swapi.dev/api/people/14/",
              "https://swapi.dev/api/people/25/",
              "https://swapi.dev/api/people/31/",
            ],
            films: [
              "https://swapi.dev/api/films/1/",
              "https://swapi.dev/api/films/2/",
              "https://swapi.dev/api/films/3/",
            ],
            created: "2014-12-10T16:59:45.094000Z",
            edited: "2014-12-20T21:23:49.880000Z",
            url: "https://swapi.dev/api/starships/10/",
            image: "/src/assets/starwars-ship.jpg",
            mostAppearancesIcon: "/src/assets/most-appearances-icon.svg",
          },
          {
            name: "Y-wing",
            model: "BTL Y-wing",
            manufacturer: "Koensayr Manufacturing",
            cost_in_credits: "134999",
            length: "14",
            max_atmosphering_speed: "1000km",
            crew: "2",
            passengers: "0",
            cargo_capacity: "110",
            consumables: "1 week",
            hyperdrive_rating: "1.0",
            MGLT: "80",
            starship_class: "assault starfighter",
            pilots: [],
            films: [
              "https://swapi.dev/api/films/1/",
              "https://swapi.dev/api/films/2/",
              "https://swapi.dev/api/films/3/",
            ],
            created: "2014-12-12T11:00:39.817000Z",
            edited: "2014-12-20T21:23:49.883000Z",
            url: "https://swapi.dev/api/starships/11/",
            image: "/src/assets/starwars-ship.jpg",
            mostAppearancesIcon: "/src/assets/most-appearances-icon.svg",
          },
          {
            name: "X-wing",
            model: "T-65 X-wing",
            manufacturer: "Incom Corporation",
            cost_in_credits: "149999",
            length: "12.5",
            max_atmosphering_speed: "1050",
            crew: "1",
            passengers: "0",
            cargo_capacity: "110",
            consumables: "1 week",
            hyperdrive_rating: "1.0",
            MGLT: "100",
            starship_class: "Starfighter",
            pilots: [
              "https://swapi.dev/api/people/1/",
              "https://swapi.dev/api/people/9/",
              "https://swapi.dev/api/people/18/",
              "https://swapi.dev/api/people/19/",
            ],
            films: [
              "https://swapi.dev/api/films/1/",
              "https://swapi.dev/api/films/2/",
              "https://swapi.dev/api/films/3/",
            ],
            created: "2014-12-12T11:19:05.340000Z",
            edited: "2014-12-20T21:23:49.886000Z",
            url: "https://swapi.dev/api/starships/12/",
            image: "/src/assets/starwars-ship.jpg",
            mostAppearancesIcon: "/src/assets/most-appearances-icon.svg",
          },
          {
            name: "TIE Advanced x1",
            model: "Twin Ion Engine Advanced x1",
            manufacturer: "Sienar Fleet Systems",
            cost_in_credits: "unknown",
            length: "9.2",
            max_atmosphering_speed: "1200",
            crew: "1",
            passengers: "0",
            cargo_capacity: "150",
            consumables: "5 days",
            hyperdrive_rating: "1.0",
            MGLT: "105",
            starship_class: "Starfighter",
            pilots: ["https://swapi.dev/api/people/4/"],
            films: ["https://swapi.dev/api/films/1/"],
            created: "2014-12-12T11:21:32.991000Z",
            edited: "2014-12-20T21:23:49.889000Z",
            url: "https://swapi.dev/api/starships/13/",
            image: "/src/assets/starwars-ship.jpg",
          },
        ],
        nextPage: "https://swapi.dev/api/starships/?page=2",
        setApiCall: vi.fn(),
        apiCall: false,
      }}
    >
      <SpaceshipList />
    </StateContext.Provider>
  );
});

describe("<SpaceshipList />", () => {
  test("SpaceshipList mounts properly", () => {
    expect(wrapper).toBeTruthy();
  });

  test("Initial state should be loading", () => {
    expect(wrapper.getByText("loading ...").textContent).toEqual("loading ...");
  });

  test("should load card components passed on via context", () => {
    const cards = wrapperWithContext.getAllByTestId("card-component");
    expect(cards.length).toBe(6);
  });
});
