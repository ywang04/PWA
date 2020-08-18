import React, { useState, useMemo } from 'react';

const Counter = ({ count }) => <h1>{count}</h1>;

function App() {
  const [count, setCount] = useState(0);
  const double = useMemo(() => count * 2, [count === 3]);

  const half = useMemo(() => double / 4, [double]);

  return (
    <div className="App">
      <button onClick={() => setCount(c => c + 1)}>Click:{count}, double:{double}, half:{half} </button>
      <Counter count={count} />
    </div>
  );
}

export default App;
