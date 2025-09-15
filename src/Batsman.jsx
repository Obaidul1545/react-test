import { useState } from 'react';

export default function Batsman() {
  const [runs, setRuns] = useState(0);

  const handleSingle = () => {
    const newRun = runs + 1;
    setRuns(newRun);
  };
  const handleFour = () => {
    const newRun = runs + 4;
    setRuns(newRun);
  };
  const handleSix = () => {
    const newRun = runs + 6;
    setRuns(newRun);
  };
  return (
    <>
      <div className="card">
        <h2>Batsman Score</h2>
        <h1>Score: {runs}</h1>

        <button onClick={handleSingle}>Single</button>
        <button onClick={handleFour}>Four</button>
        <button onClick={handleSix}>Six</button>
      </div>
    </>
  );
}
