import React from "react";
import useToggle from "./useToggle";

function ToggleComponent() {
  const [value, toggleValue] = useToggle(false);
  return (
    <div>
      {value.toString()}
      <br />
      <button onClick={toggleValue}>toggle</button>
      <button onClick={() => toggleValue(true)}>toggle : true</button>
      <button onClick={() => toggleValue(false)}>toggle : false</button>
    </div>
  );
}

export default ToggleComponent;
