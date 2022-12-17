import './scss/app.scss';

import React from 'react';

import { useSelector } from 'react-redux';

import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';

function App() {
  const theme = useSelector(state => state.theme.value);

  return (
    <div className={`${theme} App`}>
      <div className="bg-container"></div>
      <div className="container">
        <Header />
        <Input />
        <List />
      </div>
    </div>
  );
}

export default App;
