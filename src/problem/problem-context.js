import React, { useReducer, createContext } from 'react';

export const ProblemContext = createContext();

const initialState = [];

const problemReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const ProblemContextProvider = props => {
  const initState = props.initState || initialState;
  const [state, dispatch] = useReducer(problemReducer, initState);

  return (
    <ProblemContext.Provider value={[state, dispatch]}>
      {props.children}
    </ProblemContext.Provider>
  );
};
