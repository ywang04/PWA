import React, { memo } from 'react';

const TodoItem = memo(
  ({ todo: { id, value, completed }, removeTodo, toggleTodo }) => {
    console.log('test memo for TodoItem');
    return (
      <li>
        <input
          type="checkbox"
          onChange={() => toggleTodo(id)}
          checked={completed}
        />
        <label className={completed ? 'outline-label' : ''}>{value}</label>
        <button onClick={() => removeTodo(id)}>&#xd7;</button>
      </li>
    );
  }
);

export default TodoItem;
