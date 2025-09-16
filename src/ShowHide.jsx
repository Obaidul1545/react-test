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
    <div className="card space-y-3">
      <h2>{text}</h2>
      <button className="btn btn-primary" onClick={showText}>
        show
      </button>
      <button className="btn btn-primary" onClick={hideText}>
        Hide
      </button>
    </div>
  );
}
