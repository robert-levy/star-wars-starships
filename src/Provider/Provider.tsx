import {
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
  setApiCall: React.Dispatch<React.SetStateAction<boolean>>,
  apiCall: boolean
}
type StateContextType = IStateContext | null;

export const StateContext = createContext<StateContextType>(null);

const Provider = ({ children }: { children: ReactNode }) => {
  const [starShipsData, setStarShipsData] = useState<StateContextType>(null);
  const [apiCall, setApiCall] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const nextPage = starShipsData?.nextPage 
        const response =
          typeof nextPage === 'string' // if we have the next page, call that endpoint
            ? await fetch(nextPage)
            : await fetch("https://swapi.dev/api/starships")
        const data: IDataResponse = await response.json();

        // If we have old state, include it with our new results
        const starships = starShipsData?.data ? [...starShipsData.data, ...data.results] : [...data.results]
        
        const starshipData = transFormData(starships);
        setStarShipsData({
          data:starshipData,
          nextPage: data?.next,
          setApiCall,
          apiCall
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [apiCall]);

  return starShipsData ? (
    <StateContext.Provider value={starShipsData}>
      {children}
    </StateContext.Provider>
  ) : (
    <div>loading ...</div>
  );
};

export const useData = (): IStateContext => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useData must be used within a Provider");
  }
  return context;
};

export default Provider;
