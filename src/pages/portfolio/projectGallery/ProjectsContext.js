import { createContext, useReducer } from 'react';

export const ProjectsContext = createContext();

const initialState = {};

function reducer(state, action) {
  return { ...state, ...action };
}

export const ProjectsProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <ProjectsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectsContext.Provider>
  );
};