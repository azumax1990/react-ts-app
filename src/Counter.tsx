import { useState } from "react";

export const Counter: React.FC<{}> = () => {
  
  const [state, setState] = useState<number>(0)
  return (
    <div>
      <div>value: {state}</div>
      <br />
      <button onClick={() => setState(state + 1)}>+1</button>
      <br />
      <br />
      <button onClick={() => setState(state - 1)}>-2</button>
    </div>
  )
}