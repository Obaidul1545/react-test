import { useState } from 'react';

export default function Count() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);

    // setCount(10);
  };

  const countStyle = {
    border: '1px solid yellow',
    padding: '20px 60px',
    borderRadius: '10px',
  };
  return (
    <>
      <div style={countStyle}>
        <h1>Count: {count}</h1>
        <button onClick={handleClick}>Add</button>
      </div>
    </>
  );
}
