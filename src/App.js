import React, { Component } from 'react';
import logo from './logo.svg';
import { AppHeader } from './Header';
import { InventoryList } from './Inventory';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <AppHeader />
        <InventoryList />
      </div>
    );
  };
};

export default App;

