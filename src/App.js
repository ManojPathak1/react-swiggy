import React from 'react';
import s from './App.module.scss';
import Home from "./containers/Home/Home";

function App() {
  return (
    <div className={s.appContainer}>
      <Home />
    </div>
  );
}

export default App;
