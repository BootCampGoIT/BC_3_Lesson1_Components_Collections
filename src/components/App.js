import React from "./section/node_modules/react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";

// const user = {
//   avatar: "https://maxplayers.net/files/news_imgs/1509470228.jpg",
//   name: "Alex",
//   age: 35,
//   status: "student",
// };

const users = [
  {
    id: "0",
    avatar: "https://maxplayers.net/files/news_imgs/1509470228.jpg",
    name: "Alex",
    age: 35,
    status: "student",
    isOnline: true,
  },
  {
    id: "1",
    avatar: "https://maxplayers.net/files/news_imgs/1509470228.jpg",
    name: "Nikita",
    age: 25,
    status: "student",
    isOnline: false,
  },
  {
    id: "2",
    avatar: "https://maxplayers.net/files/news_imgs/1509470228.jpg",
    name: "Oleg",
    age: 20,
    status: "student",
    isOnline: true,
  },
];

// const markup = users.reduce((acc, user) => {
//   acc += `<h2>${user.name}</h2>`;
//   return acc;
// }, "");

const App = () => {
  return (
    <>
      <Header />
      <Main users={users} title='User info:' />
      <Footer />
    </>
  );
};

export default App;
