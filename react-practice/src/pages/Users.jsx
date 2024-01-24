import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import SingleUser from '../components/SingleUser';
import getUsers from '../services/UserService';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <div className='user-list'>
        <input
          type='search'
          placeholder='Search by name'
          value={searchTerm}
          onChange={handleSearch}
        />
        {filteredUsers.map((user) => (
          <div className='user-card' key={user.id}>
            <Link to={{ pathname: `/users/${user.id}` }} className='user-link'>
              <SingleUser user={user} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
