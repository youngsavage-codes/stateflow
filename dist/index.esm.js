import React, { createContext, useState, useContext } from 'react';

// Create Contexts
const GlobalStateContext = createContext(undefined);
const GlobalStateUpdateContext = createContext(undefined);
const GlobalStateProvider = ({
  children
}) => {
  const [state, setState] = useState({}); // Initial global state
  return React.createElement(GlobalStateContext.Provider, {
    value: state
  }, React.createElement(GlobalStateUpdateContext.Provider, {
    value: setState
  }, children));
};
// Hook to Access State
const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within GlobalStateProvider");
  }
  return context;
};
// Hook to Update State
const useSetGlobalState = () => {
  const context = useContext(GlobalStateUpdateContext);
  if (!context) {
    throw new Error("useSetGlobalState must be used within GlobalStateProvider");
  }
  return context;
};
// Hook to Select State (Optional Advanced Feature)
const useGlobalStateSelector = selector => {
  const state = useGlobalState();
  return selector(state);
};

export { GlobalStateProvider, useGlobalState, useGlobalStateSelector, useSetGlobalState };
//# sourceMappingURL=index.esm.js.map
