import React from "react";

function Home({ user, logout }) {
  return (
    <div>
      im teachers home <button onClick={logout}>logout</button>
    </div>
  );
}

export default Home;
