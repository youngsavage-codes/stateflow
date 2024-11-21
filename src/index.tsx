import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

// Define types for state and updater
interface GlobalState {
  [key: string]: any; // Adjust this to reflect your actual global state structure
}

// Create Contexts
const GlobalStateContext = createContext<GlobalState | undefined>(undefined);
const GlobalStateUpdateContext = createContext<Dispatch<SetStateAction<GlobalState>> | undefined>(undefined);

// Provider Component
interface GlobalStateProviderProps {
  children: ReactNode;
}

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
  const [state, setState] = useState<GlobalState>({}); // Initial global state

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalStateUpdateContext.Provider value={setState}>
        {children}
      </GlobalStateUpdateContext.Provider>
    </GlobalStateContext.Provider>
  );
};

// Hook to Access State
export const useGlobalState = (): GlobalState => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within GlobalStateProvider");
  }
  return context;
};

// Hook to Update State
export const useSetGlobalState = (): ((updater: SetStateAction<GlobalState>) => void) => {
  const context = useContext(GlobalStateUpdateContext);
  if (!context) {
    throw new Error("useSetGlobalState must be used within GlobalStateProvider");
  }
  return context;
};

// Hook to Select State (Optional Advanced Feature)
export const useGlobalStateSelector = <T,>(selector: (state: GlobalState) => T): T => {
  const state = useGlobalState();
  return selector(state);
};
