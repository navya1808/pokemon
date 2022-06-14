import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
  const navigator = useNavigate();
  const [search, setSearch] = useState("");
  const [submitt, setSubmitt] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (search.length < 3) {
      setSubmitt(true);
    } else {
      navigator(`/${search}`);
      setSearch("");
      setSubmitt(false);
    }
  };
  return (
    <div className="cc">
      <div className="ccc">
        <p style={{ textAlign: "center", fontSize: "50px" }}>
          Search your pokemon
        </p>
        <h1>
          <b></b>
        </h1>
        <form onSubmit={submit}>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          {search.length < 3 && submitt === true ? (
            <p>Enter the pokemon</p>
          ) : (
            ""
          )}
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Home;
