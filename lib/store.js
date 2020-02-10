import React, { createContext, useContext, useReducer } from 'react';

const StoreContext = createContext();
const initialState = {
    file: [],
    onload:{
      loaded:false,
      hide:1,
      transY:0,
      color:'#ffffff00',
      drop:false
    }
};

const reducer = (state, action) => {
  switch(action.type) {
    case "increment":
        return {
            file: [...state.file,action.file],
        }
    case "remove":
        return {
            file: action.file
        }
    case "reset":
        return {
            file: []
        }
    case "onload":
        return {
          onload: {
            loaded:true,
            hide:0,
            transY:'50%',
            color:'#388e3c',
            drop:true
          }
        }
    case "notload":
        return {
          onload:{
            loaded:false,
            hide:1,
            transY:0,
            color:'#ffffff00',
            drop:false
          }
        }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => useContext(StoreContext);