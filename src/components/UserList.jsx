import React from 'react';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UserList = props => {
  return (
    <div>
      <ul>
        {props.users.map((user, key) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
