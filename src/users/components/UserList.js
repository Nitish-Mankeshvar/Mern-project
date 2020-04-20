import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import UserItem from './UserItem';
import './UserList.css';

const UserList = (props) => {
  {
    if (props.users.length === 0) {
      return (
        <div className="center">
          <Card>
            <h1>No Users found!</h1>
          </Card>
        </div>
      );
    }
  }

  return (
    <ul className="users-list">
      {props.users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UserList;
