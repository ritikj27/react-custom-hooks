import React, { useRef } from "react";

function usePrevious(val) {
  const currRef = useRef(val);
  const prevRef = useRef();

  if (currRef.current !== val) {
    prevRef.current = currRef.current;
    currRef.current = val;
  }

  return prevRef.current;
}
export default usePrevious;
