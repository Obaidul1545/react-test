import { use } from 'react';
import People from './People';

const UserData = ({ peopleData }) => {
  const users = use(peopleData);

  return (
    <>
      <div className="grid grid-cols-3 gap-5 p-8">
        {users.map((user) => {
          // console.log(user);
          return <People user={user}></People>;
        })}
      </div>
    </>
  );
};

export default UserData;
