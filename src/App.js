import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodo from './components/AddTodo/';
import TodoList from './components/todoList/';
import actions from './actions/';
import logo from './logo.svg';
import './App.css';

export const App = ({ submitTodo, todos, deleteTodo }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <h1>Todo List</h1>
    <AddTodo submitTodo={submitTodo}/>
    <TodoList todos={todos} deleteTodo={deleteTodo} />
  </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    },
  )).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};


const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: (text) => {
    if (text) {
      dispatch(actions.submitTodo(text));
    }
  },

  deleteTodo: (id) => {
    dispatch(actions.deleteTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
