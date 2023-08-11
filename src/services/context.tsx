import { Dispatch, SetStateAction, createContext, useState } from "react";
import { ReactNode } from "react";

export const AppContext = createContext({} as AppContextProps);

interface AppContextProps {
  entity: string;
  setEntity: Dispatch<SetStateAction<string>>;
  sport: string;
  setSport: Dispatch<SetStateAction<string>>;
  tournament: string;
  setTournament: Dispatch<SetStateAction<string>>;
  pathName: boolean;
  setPathName: Dispatch<SetStateAction<boolean>>;
}
export interface AppContextProviderProps {
  children: ReactNode;
}

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [entity, setEntity] = useState<string>("");
  const [sport, setSport] = useState<string>("");
  const [tournament, setTournament] = useState<string>("");
  const [pathName, setPathName] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        entity,
        setEntity,
        sport,
        setSport,
        tournament,
        setTournament,
        pathName,
        setPathName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
