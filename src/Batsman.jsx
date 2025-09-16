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
      <div className="card space-y-3">
        <h2>Batsman Score</h2>
        <h1>Score: {runs}</h1>

        <button className="btn btn-primary" onClick={handleSingle}>
          Single
        </button>
        <button className="btn btn-primary" onClick={handleFour}>
          Four
        </button>
        <button className="btn btn-primary" onClick={handleSix}>
          Six
        </button>
      </div>
    </>
  );
}
