import React from 'react';
import './App.css';

interface AppProps {
  message: string;
};

const App = ({message}: AppProps) => {
  return (
    <div style={{padding: "100px 200px", textAlign: "center"}}>
      <div>{message}</div>
    </div>
     
  );
}

export default App;