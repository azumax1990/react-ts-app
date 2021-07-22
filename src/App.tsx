import React from 'react';
import { Counter } from "./Counter";
import { CounterReducer } from './CounterReducer';


interface AppProps {
  message: string;
};

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div style={{padding: "100px 200px", textAlign: "center"}}>
      <div>
        <CounterReducer />
      </div>
    </div>
     
  );
}

export default App;