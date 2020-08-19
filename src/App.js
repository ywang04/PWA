import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });
  const handleClick = () => setCount(c => c + 1);

  //不同useEffect 关注点分离
  useEffect(() => {
    document.title = count;
  });

  useEffect(() => {
    console.log('count');
  }, [count])

  useEffect(() => {
    console.log('binding');
    window.addEventListener('resize', function () {
      setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    });
    return () => {
      console.log('destroy');
      window.removeEventListener('resize', function () {
        setSize({
          width: document.documentElement.clientWidth,
          height: document.documentElement.clientHeight,
        });
      });
    };
  }, []);

  return (
    <button onClick={handleClick}>
      Click {count} size: {size.width} * {size.height}
    </button>
  );
}

export default App;
