import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./ParticularPokemon.css";

const ParticularPokemon = (props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const value = location.pathname?.split("/")[1];

  useEffect(() => {
    setLoading(true);
    const url = `https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=${value}`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        navigate("/error");
      });
  }, []);

  return loading ? (
    <div className="c">
        <b>Loading...</b>
      </div>
  ) : (
    <div className="c">
      <div className="card">
        <img
          src={`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${data?.images?.photo}`}
          alt={data?.name}
          style={{ width: 100 }}
        />
        <div className="container">
          <h4>
            <b style={{ textAlign: "center", fontSize: "30px" }}>
              {data?.name}
            </b>
          </h4>
          <p>
            <b>Nick name: {data?.shortname} </b>
          </p>
          <p>
            <b>Type of the pokemon: {data?.info?.type}</b>
          </p>
          <p>
            <b>Type of the pokemon weakness: {data?.info?.weakness}</b>
          </p>
          <p>
            <b>Health points: {data?.hp} </b>
          </p>
          <p>
            <b>Description: {data?.info?.description} </b>
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ParticularPokemon;
