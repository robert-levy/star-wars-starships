import React, {
  useState,
  useEffect,
  createContext,
  ReactNode,
  useContext,
} from "react";
import { transFormData } from "../utilityFunctions";
import { IStarshipData, IDataResponse } from "../interfaces";


interface IStateContext {
  data: IStarshipData[];
  nextPage: string | null;
}
type StateContextType = IStateContext | null;

export const StateContext = createContext<StateContextType>(null);

const Provider = ({ children }: { children: ReactNode }) => {
  const [starShipsData, setStarShipsData] = useState<StateContextType>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/starships");
        const data: IDataResponse = await response.json();
        const transformedData = transFormData(data);
        setStarShipsData({
          data: transformedData.results,
          nextPage: transformedData.next,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  
  return starShipsData ? (
    <StateContext.Provider value={starShipsData}>
      {children}
    </StateContext.Provider>
  ) : (
    <div>loading ...</div>
  );
};

export const useData = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};

export default Provider;
