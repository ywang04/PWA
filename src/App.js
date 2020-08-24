import React, { useState, useCallback, useEffect } from 'react';
import Todos from './Todos';
import Control from './Control';
import './App.css';

function TodoList() {
  //immutable 不能直接改 但是可以修改复本
  const [todos, setTodos] = useState([]);
  const addTodo = useCallback(todo => {
    setTodos(preState => [...preState, todo]);
  }, []);

  const removeTodo = useCallback(id => {
    setTodos(preState => preState.filter(todo => todo.id !== id));
  }, []);

  const toggleTodo = useCallback(id => {
    setTodos(preState =>
      preState.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  //useEffect和useState一样 也有顺序 localStorage.getItem('todos')一开始有可能是null
  useEffect(() => {setTodos(JSON.parse(localStorage.getItem('todos') || '[]')); console.log(1)}
  , []);

  useEffect(() => {localStorage.setItem('todos', JSON.stringify(todos)); console.log(2)}
  , [todos]);

  return (
    <div className="todo-list">
      <Control addTodo={addTodo} />
      <Todos removeTodo={removeTodo} toggleTodo={toggleTodo} todos={todos}/>
    </div>
  );
}

export default TodoList;
