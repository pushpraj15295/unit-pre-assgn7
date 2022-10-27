import { useContext, useReducer } from "react";
import { AppContext } from "./redux/AppContext";
import Counter from "./redux/Counter";
import "./styles.css";

export default function App() {
  const { dispatch } = useContext(AppContext);
  return (
    <div className="App">
      <Counter />

      <button onClick={() => dispatch({ type: "DEC" })}>DECREMENT</button>
      <button onClick={() => dispatch({ type: "INC" })}>INCREMENT</button>
    </div>
  );
}
