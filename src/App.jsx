import './App.css';
import Count from './Count';
import Batsman from './Batsman';
import { Suspense, useEffect } from 'react';
import GetData from './FatchApi';
import ShowHide from './ShowHide';
import UserData from './UserData';

const fatchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
};

const userData = async () => {
  const res = await fetch('https://fake-json-api.mock.beeceptor.com/users');
  return res.json();
};

function App() {
  const users = fatchUsers();
  const peopleData = userData();

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <UserData peopleData={peopleData}></UserData>
      </Suspense>
      <Suspense fallback={<p>Loding...</p>}>
        <GetData users={users}></GetData>
      </Suspense>
      <Batsman></Batsman>
      <Count></Count>
      <ShowHide></ShowHide>
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
