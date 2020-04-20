import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Nitish M',
      image: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
      places: 3,
    },
  ];

  return <UserList users={USERS} />;
};

export default Users;
