import React from 'react';
import '../styles/Users.scss';

const SingleUser = ({ user }) => {
  return (
    <div>
      <div>
        <strong>First name:</strong> {user.name}
      </div>
      <div>
        <strong>Nickname:</strong> {user.username}
      </div>
      <div>
        <strong>Email:</strong> {user.email}
      </div>
      <div>
        <strong>Phone:</strong> {user.phone}
      </div>
    </div>

  );
};

export default SingleUser;
