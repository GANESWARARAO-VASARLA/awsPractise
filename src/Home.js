import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/user/1">Go to User1</Link>
      <br />
      <Link to="/user/2">Go to User2</Link>
    </div>
  );
}

export default Home;
