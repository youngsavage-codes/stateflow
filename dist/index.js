'use strict';

var React = require('react');

// Create Contexts
const GlobalStateContext = React.createContext(undefined);
const GlobalStateUpdateContext = React.createContext(undefined);
const GlobalStateProvider = ({
  children
}) => {
  const [state, setState] = React.useState({}); // Initial global state
  return React.createElement(GlobalStateContext.Provider, {
    value: state
  }, React.createElement(GlobalStateUpdateContext.Provider, {
    value: setState
  }, children));
};
// Hook to Access State
const useGlobalState = () => {
  const context = React.useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within GlobalStateProvider");
  }
  return context;
};
// Hook to Update State
const useSetGlobalState = () => {
  const context = React.useContext(GlobalStateUpdateContext);
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

exports.GlobalStateProvider = GlobalStateProvider;
exports.useGlobalState = useGlobalState;
exports.useGlobalStateSelector = useGlobalStateSelector;
exports.useSetGlobalState = useSetGlobalState;
//# sourceMappingURL=index.js.map
