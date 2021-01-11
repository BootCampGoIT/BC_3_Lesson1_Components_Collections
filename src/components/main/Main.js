import React from "../section/node_modules/react";
import Section from "../section/Section";
import UserList from "../section/userList/UserLIst";

const Main = ({ users, title }) => {
  return (
    <main>
      <Section title={title}>
        <UserList users={users} />
      </Section>
    </main>
  );
};

export default Main;


