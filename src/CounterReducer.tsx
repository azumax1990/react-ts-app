import { useReducer } from "react";

type StateType = {
  count: number;
}
const initialState: StateType = {
  count: 0
};

type ActionType = { type: 'increment' | 'decrement' | 'reset' };

export const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};

    case 'decrement':
      return {count: state.count - 1};

    case 'reset':
      return {count: state.count = 0};

    default:
      throw new Error();
  }
}

export const CounterReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'reset'})}>reset</button>
    </>
  );
}