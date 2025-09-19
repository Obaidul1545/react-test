import { useState } from 'react';

export default function Count() {
  const [count, setCount] = useState(0);

  const handleCountIncr = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleCountDicr = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleCountReset = () => {
    const newCount = 0;
    setCount(newCount);
  };

  const countStyle = {
    border: '1px solid yellow',
    padding: '20px 60px',
    borderRadius: '10px',
  };
  return (
    <>
      <div className="space-x-3 " style={countStyle}>
        <h1>Count: {count}</h1>
        <button className="btn btn-primary" onClick={handleCountIncr}>
          Add
        </button>
        <button className="btn btn-primary" onClick={handleCountDicr}>
          Minus
        </button>
        <button className="btn btn-primary" onClick={handleCountReset}>
          Reset
        </button>
      </div>
    </>
  );
}
