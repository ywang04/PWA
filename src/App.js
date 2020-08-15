import React, { useState } from 'react';

function App(props) {
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
