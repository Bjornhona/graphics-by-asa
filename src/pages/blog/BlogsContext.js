import { createContext, useReducer } from 'react';

export const BlogsContext = createContext();

const initialState = {};

function reducer(state, action) {
  return { ...state, ...action };
}

export const BlogsProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <BlogsContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogsContext.Provider>
  );
};