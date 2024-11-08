import React, { useEffect, useRef, useState } from 'react';

const UseRefEx = () => {
  const count = useRef(0); // This keeps track of the count but does not cause re-renders
  const [renderCount, setRenderCount] = useState(0); // This triggers re-render to update the UI

  useEffect(() => {
    console.log("The component has been rendered");
  }, []);

  const handle = () => {
    count.current = count.current + 1; // Increment the ref value
    console.log(`Clicked ${count.current} times`);
    setRenderCount(renderCount + 1); // Trigger re-render by updating state
  };

  return (
    <div>
      <button onClick={handle}>Click Me</button>
      <p>The component rendered: {count.current} times</p>
    </div>
  );
};

export default UseRefEx;
