import React from "react";
import { useStoreContext } from "../utils/GlobalState";

function Saved() {
  const [state, dispatch] = useStoreContext();
  const {savedProducts} = state
  console.log(savedProducts)
  return (
    <div>hello woirkf</div>
  );
}

export default Saved;
