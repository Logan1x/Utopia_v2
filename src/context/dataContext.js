import { createContext, useContext, useReducer } from "react";
import { dataReducerFunc, initialState } from "./reducer/dataReducer";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducerFunc, initialState);
  return (
    <DataContext.Provider value={{ state }}>{children}</DataContext.Provider>
  );
};

const useDataContext = () => useContext(DataContext);

export { DataProvider, useDataContext };
