import React, { memo, useRef } from 'react';

//如果用input onChange获取value的话 每输入一个值 组件就会re-render memo的意义就没有了
const Control = memo(({ addTodo }) => {
  console.log('test memo for Control');
  const inputRef = useRef();

  const handleSubmit = e => {
    e.preventDefault();
    const inputText = inputRef.current.value.trim();
    if (inputText.length > 0) {
      addTodo({
        id: idSeq++,
        value: inputText,
        completed: false,
      });
      inputRef.current.value = '';
    }
  };

  let idSeq = Date.now();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="What needs to be done"
          ref={inputRef}
        />
      </form>
    </div>
  );
});

export default Control;
