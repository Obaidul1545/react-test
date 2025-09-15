import './App.css';
import Count from './Count';
import Batsman from './Batsman';
import { Suspense } from 'react';
import GetData from './FatchApi';

const fatchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

function App() {
  const users = fatchUsers();

  return (
    <>
      <Suspense fallback={<p>Loding...</p>}>
        <GetData users={users}></GetData>
      </Suspense>
      <Batsman></Batsman>
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
