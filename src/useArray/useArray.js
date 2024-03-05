import React, { useState } from "react";

function useArray(newarr) {
  const [array, setArray] = useState(newarr);

  const push = (val) => {
    setArray((prev) => [...prev, val]);
  };

  // Change Second Element To 9
  function update(index, newElement) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length),
    ]);
  }

  // remove emlem w.r.t index
  const remove = (index) => {
    setArray((a) => [...a.slice(0, index), ...a.slice(index + 1, a.length)]);
  };

  //   filter(n => n < 3)
  const filter = (con) => {
    setArray((a) => a.filter(con));
  };

  const set = (arr) => {
    setArray(arr);
  };
  const clear = () => {
    setArray([]);
  };

  return { array, push, update, remove, filter, set, clear };
}

export default useArray;
