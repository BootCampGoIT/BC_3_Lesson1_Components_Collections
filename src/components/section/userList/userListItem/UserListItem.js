import React from "react";
import PropTypes from "prop-types";

const UserListItem = ({ name, avatar, age, status, isOnline }) => {
  return (
    <li
      style={{
        border: "1px solid black",
        width: "200px",
        height: "300px",
        padding: "10px",
      }}>
      <h3>Name: {name}</h3>
      <img src={avatar} alt='' style={{ height: "100px" }} />
      <p>Age: {age}</p>
      {/* <p>: {status}</p> */}
      <p>
        Status: {"  "}
        {isOnline ? (
          <span
            style={{
              display: "inline-block",
              height: "15px",
              width: "15px",
              backgroundColor: "green",
            }}
          />
        ) : (
          <span
            style={{
              display: "inline-block",
              height: "15px",
              width: "15px",
              backgroundColor: "red",
            }}
          />
        )}
      </p>
      <button>Delete</button>
    </li>
  );
};

export default UserListItem;

// UserListItem.defaultProps = {
//   avatar:
//     "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
// };

UserListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  age: PropTypes.number,
  status: PropTypes.string,
};
