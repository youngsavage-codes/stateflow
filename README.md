# Stateflow-lib Documentation
stateflow-lib is a lightweight, easy-to-use library for managing global state in React applications. It provides a simple way to share state across 
components without prop-drilling. With a declarative API, it allows developers to focus on building features while maintaining a clean state management structure.

# Features
- Global State Management: Manage shared state across your application effortlessly.
- Ease of Use: Simple, minimalistic API with a focus on usability.
- TypeScript Support: Fully typed for seamless TypeScript integration.
- Lightweight: Designed to add minimal overhead to your project.

# Installation
Install the library via npm or yarn:

- npm install stateflow-lib

or

- yarn add stateflow-lib

# Getting Started
Follow these steps to use stateflow-lib in your project:


# 1. Wrap Your App with GlobalStateProvider
The GlobalStateProvider component initializes the global state and wraps your application.

```tsx
import React from "react";
import { GlobalStateProvider, useGlobalState } from "stateflow-lib";

const App = () => {
  return (
    <GlobalStateProvider>
      <h1>Hello, Stateflow!</h1>
    </GlobalStateProvider>
  );
};

export default App;
```


# 2. Access Global State with useGlobalState
Use the useGlobalState hook to access the global state in any component.

```tsx
import { useGlobalState, useSetGlobalState } from "stateflow-lib";

const Counter = () => {
  const globalState = useGlobalState();
  const setGlobalState = useSetGlobalState();

  const increment = () =>
    setGlobalState((prev) => ({ ...prev, counter: (prev.counter || 0) + 1 }));

  return (
    <div>
      <p>Counter: {globalState.counter || 0}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
```


# 3. Update Global State with useSetGlobalState
Use the useSetGlobalState hook to update the global state.

```tsx
import React from "react";
import { useSetGlobalState } from "stateflow-lib";

const UpdateState = () => {
  const setGlobalState = useSetGlobalState(); // Update the global state

  const updateEmail = () => {
    setGlobalState((prev) => ({
      ...prev,
      email: "newemail@example.com",
    }));
  };

  const updateAge = () => {
    setGlobalState((prev) => ({
      ...prev,
      age: 30,
    }));
  };

  return (
    <div>
      <button onClick={updateEmail}>Update Email</button>
      <button onClick={updateAge}>Update Age</button>
    </div>
  );
};

export default UpdateState;
```

# Example: Managing Multiple States
Here’s a complete example with multiple states (email and age):

***Step 1: Wrap Your App***
```tsx
import React from "react";
import { GlobalStateProvider } from "stateflow-lib";
import DisplayState from "./components/DisplayState";
import UpdateState from "./components/UpdateState";

const App = () => {
  return (
    <GlobalStateProvider>
      <div>
        <h1>Stateflow-lib Example</h1>
        <DisplayState />
        <UpdateState />
      </div>
    </GlobalStateProvider>
  );
};

export default App;
```


***Step 2: Display State***

```tsx
// components/DisplayState.tsx
import React from "react";
import { useGlobalState } from "stateflow-lib";

const DisplayState = () => {
  const globalState = useGlobalState();
  return (
    <div>
      <h2>Global State</h2>
      <p>Email: {globalState.email || "Not Set"}</p>
      <p>Age: {globalState.age || "Not Set"}</p>
    </div>
  );
};

export default DisplayState;
```

***Step 3: Update State***

```tsx
// components/UpdateState.tsx
import React from "react";
import { useSetGlobalState } from "stateflow-lib";

const UpdateState = () => {
  const setGlobalState = useSetGlobalState();

  const handleUpdate = () => {
    setGlobalState(() => ({
      email: "example@example.com",
      age: 25,
    }));
  };

  return (
    <button onClick={handleUpdate}>Set Email and Age</button>
  );
};

export default UpdateState;
```

# API Reference

***GlobalStateProvider***
Wrap your application with this provider to initialize the global state.

```tsx
<GlobalStateProvider>
  {children}
</GlobalStateProvider>
```

***Retrieve the current global state.***

```tsx
useGlobalState()

const globalState = useGlobalState();
```

***Set or update the global state.***

```tsx
useSetGlobalState()

const setGlobalState = useSetGlobalState();
setGlobalState((prev) => ({ ...prev, key: value }));
```

# Best Practices
Keep State Minimal: Avoid overloading the global state with unnecessary data.
Immutable Updates: Always return a new state object when updating the state.
Separate Components: Keep state management logic separate from display logic for maintainability.


# FAQ
Q: Can I use multiple global states?
A: Yes, you can manage multiple properties within a single global state object.

Q: Is stateflow-lib compatible with TypeScript?
A: Yes, the library is fully typed and works seamlessly with TypeScript.

Q: How do I initialize the global state with default values?
A: Pass a function to setGlobalState on app load:

setGlobalState(() => ({
  email: "default@example.com",
  age: 0,
}));


# Contributing
Feel free to contribute to stateflow-lib by creating issues or submitting pull requests on the GitHub repository.

# License
stateflow-lib is licensed under the MIT License.


