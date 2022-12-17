import './scss/app.scss';

import React from 'react';

import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';

function App() {
  return (
    <div className="dark App">
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
