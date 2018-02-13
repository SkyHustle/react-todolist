import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo/';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">App</h1>
      </header>
      <h1>Todo List</h1>
      <AddTodo submitTodo={()=> {}}/>
    </div>
  );
}

export default App;
