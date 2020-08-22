import React, { memo } from 'react';
import TodoItem from './TodoItem';

const Todos = memo(({ removeTodo, toggleTodo, todos }) => {
  console.log('test memo for Todos');
  const todoList = todos.map(todo => (
    <TodoItem
      todo={todo}
      key={todo.id}
      toggleTodo={toggleTodo}
      removeTodo={removeTodo}
    />
  ));

  return <ul>{todoList}</ul>;
});

export default Todos;
