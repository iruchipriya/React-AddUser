import React, { useState } from 'react';
import './style.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUser = (uName, uAge) => {
    setUsersList(prevUsersList => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() }
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUser} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
