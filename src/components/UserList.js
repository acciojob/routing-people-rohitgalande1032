import React from "react";
import { Link } from "react-router-dom";

const UserList = ({list, loading}) => {
  return (
    <div>
    <h1>Users List</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ul>
            {list.map((user, index) => (
              <li key={index}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserList;
