import React, { useState, useMemo, useCallback, memo } from 'react';

const Counter = memo(({ handleClick }) => {
  console.log('i m rendering')
  return (<h1 onClick={handleClick}>test</h1>);
});

function App() {
  const [count, setCount] = useState(0);
  const double = useMemo(() => count * 2, [count === 3]);

  const half = useMemo(() => double / 4, [double]);

  //useMemo返回值是函数的话 就相当于useCallback
  // useMemo(() => fn) useCallback(fn)
  const handleClick = useMemo(() => {
    console.log(123); //只会运行一次 注意函数被创建和函数被调用的区别
    return () => {
      setCount(c => c + 1);
    };
  }, []);

  return (
    <div className="App">
      <button onClick={() => setCount(c => c + 1)}>
        Click:{count}, double:{double}, half:{half}{' '}
      </button>
      <Counter handleClick={handleClick} />
    </div>
  );
}

export default App;
