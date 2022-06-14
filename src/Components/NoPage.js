import React from "react";
import "./NoPage.css";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="page">
      <h1>Opps, You are on the wrong page!</h1>
      <Link to="/">Redirect</Link>
    </div>
  );
};

export default NoPage;
