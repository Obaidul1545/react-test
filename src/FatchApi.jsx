import { use } from 'react';
import User from './User';

export default function GetData({ users }) {
  const getUsers = use(users);

  return (
    <div className="card grid grid-cols-4 gap-5">
      {getUsers.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
}
