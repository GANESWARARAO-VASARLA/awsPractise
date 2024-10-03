import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function User() {
  let { id } = useParams();
  let navigate = useNavigate();

  return (
    <div>
      <h1>User Page</h1>
      <p>User ID: {id}</p>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
}

export default User;
