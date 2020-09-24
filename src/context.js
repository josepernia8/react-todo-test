import React from "react";

// Store Context is the global context that is managed by reducers.

const Store = React.createContext({
  todos: [
    // Initial Data
    { value: "Do a commit", completed: false },
    { value: "Git push", completed: false },
    { value: "Take a break", completed: false },
  ]
});

export default Store;
