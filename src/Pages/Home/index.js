import { Link } from "react-router-dom";
import { MovieCards } from "../../Pages/MovieCard";
import axios from "axios";
import { useEffect, useState } from "react";

export function Home() {
  const [movCom, setMovCom] = useState([]);
  console.log(movCom);
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/ricardoarena"
        );
        setMovCom([...response.data]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, []);

  return (
    <>
      <h1 style={{ margin: "15px" }}>Filmes favoritos</h1>

      <Link to="/favmovies">
        <button style={{ cursor: "pointer", marginLeft: "80px" }}>
          Criar minha coleção
        </button>
      </Link>

      <h2 style={{ marginRight: "30px", marginTop: "50px" }}>
        Filmes da Comunidade:
      </h2>

      {movCom.map((currentMovie) => {
        return <MovieCards owner={currentMovie.owner} id={currentMovie._id} />;
      })}
    </>
  );
}
