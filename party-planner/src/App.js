import React from 'react';
import ShoppingList from './Shopping/ShoppingList';
import ShoppingForm from './Shopping/ShoppingForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ShoppingForm />
      <ShoppingList />
    </div>
  );
}

export default App;
