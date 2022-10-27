import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Counter() {
  const { state } = useContext(AppContext);
  return <h1>Count:{state}</h1>;
}
