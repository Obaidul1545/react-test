import { use } from 'react';
import User from './User';

export default function GetData({ users }) {
  const getUsers = use(users);

  return (
    <div className="card">
      {getUsers.map((user) => (
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
}
