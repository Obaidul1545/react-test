import { useState } from 'react';

export default function ShowHide() {
  const [text, setText] = useState('"Hello, React Learner!!"');

  const showText = () => {
    setText('"Hello, React Learner!!"');
  };
  const hideText = () => {
    setText('');
  };
  return (
    <div className="card">
      <h2>{text}</h2>
      <button onClick={showText}>show</button>
      <button onClick={hideText}>Hide</button>
    </div>
  );
}
