import React from "react";
import { Link } from "react-router-dom";

const UserList = ({list, loading}) => {
  return (
    <div>
      {loading ? (
        <div>
            <p>Loading...</p>
        </div>
      ) : (
        <div>
            <h1>User List</h1>
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
