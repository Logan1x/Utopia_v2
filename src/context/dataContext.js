import { createContext, useContext } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
};

const useDataContext = () => useContext(DataContext);

export { DataProvider, useDataContext };
