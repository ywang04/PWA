import React, { useState } from 'react';

function App(props) {
  // state的默认值基于props
  // 函数只在第一次渲染时被调用 函数的返回值就是默认值
  const [count, setCount] = useState(() => {
    console.log('testing');
    return props.defaultCount || 0;
  });

  const handleClick = () => {
    setCount(c => c + 1);
  };

  return (
    <div className="App">
      <button onClick={handleClick}>Count {count}</button>
    </div>
  );
}

export default App;
