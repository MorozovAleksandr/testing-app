import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const resp = await axios.get("https://jsonplaceholder.typicode.com/users");

    setUsers(resp.data);
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className={"UsersPage"} data-testid="user-page">
      {users.map((user) => (
        <Link
          to={`/users/${user.id}`}
          key={user.id}
          state={{ user }}
          data-testid="user-item"
        >
          {user.name}
        </Link>
      ))}
    </div>
  );
};

export default memo(Users);
