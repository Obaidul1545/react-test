import './App.css';
import Count from './Count';
import Batsman from './Batsman';

function App() {
  const players = [
    { id: 1, name: 'Sakib', age: 25, Address: 'Magura' },
    { id: 2, name: 'Tamim', age: 30, Address: 'Khulna' },
    { id: 3, name: 'Sabbir', age: 27, Address: 'Rajshahi' },
    { id: 4, name: 'Liton', age: 32, Address: 'Dhaka' },
  ];

  const handleClick = () => {
    alert('clicked');
  };
  return (
    <>
      <Batsman></Batsman>
      {/* <button onClick={handleClick}>clicked</button> */}
      <Count></Count>
    </>
  );
}

// function MyName(probs) {
//   const style = {
//     color: 'red',
//     fontSize: '100px',
//   };
//   return (
//     <>
//       <h1 style={style}>wow nice </h1>
//       <div>
//         <p>Name: {probs.name}</p>
//         <p>Address: {probs.address}</p>
//       </div>
//     </>
//   );
// }

export default App;
