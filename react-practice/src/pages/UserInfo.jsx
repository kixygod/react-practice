// UserInfo.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { RingLoader } from 'react-spinners';
import NavBar from '../components/NavBar';
import FullUser from '../components/FullUser'


const UserInfo = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        .then((response) => response.json())
        .then((data) => setUser(data[0]))
        .catch((error) => console.error('Ошибка при получении данных:', error));
    }
  }, [id]);

  if (!user) {
    return (
      <div>
        <NavBar />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <RingLoader color="#99BC85" size={50} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <NavBar />
      <FullUser user={user} />
    </div>
  );
};

export default UserInfo;
