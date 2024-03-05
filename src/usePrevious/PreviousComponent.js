import React, { useState } from "react";
import usePrevious from "./usePrevious";

function PreviousComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("tt");
  const prevcount = usePrevious(count)
  return (
    <div>
      {count} - {prevcount}
      {name}
      <button onClick={() => setCount((c) => c + 1)}>inc</button>
      <button onClick={() => setName("jon")}>change name</button>
    </div>
  );
}

export default PreviousComponent;
