import React from "react";

function Home({ user, logout }) {
  return (
    <>
      <div>Students home</div>
      <button onClick={logout}>logout</button>
    </>
  );
}

export default Home;
