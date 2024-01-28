import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleUser from "../components/SingleUser";
import NavBar from "../components/NavBar";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error:", error));
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
      <div className="user-list">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
        {filteredUsers.map((user) => (
          <div className="user-card">
            <Link
              key={user.id}
              to={{ pathname: `/users/${user.id}` }}
              className="user-link"
            >
              <SingleUser user={user} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
