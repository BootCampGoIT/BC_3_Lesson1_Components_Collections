import React from "react";
import PropTypes from "prop-types";
import UserListItem from "./userListItem/UserListItem";

const UserList = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <UserListItem {...user} key={user.id} />
      ))}
    </ul>
  );
};

export default UserList;

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};
