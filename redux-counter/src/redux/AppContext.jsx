import { createContext, useReducer } from "react";

const init = 0;
export const reducer = (state = init, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
};

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
