import React from "../section/node_modules/react";

const Header = () => {
  return (
    <header>
      <ul
        className='list'
        style={{
          display: "flex",
          border: "1px solid black",
          listStyle: "none",
        }}>
        <li>Home</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
    </header>
  );
};

export default Header;
