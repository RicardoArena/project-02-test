import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function MoviePages() {
  const { id } = useParams();
  const [moviePage, setMoviePage] = useState({});
  const navigate = useNavigate();

  async function handleDelete() {
    try {
      await axios.delete(`https://ironrest.herokuapp.com/ricardoarena/${id}`);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchMoviePage() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/ricardoarena/${id}`
        );

        setMoviePage(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMoviePage();
  }, []);

  return (
    <>
      <h1>Coleção {moviePage.owner}</h1>
      <ul>
        <li>Nome do filme: {moviePage.movies}</li>
        <li>Descrição: {moviePage.description}</li>
      </ul>
      <button onClick={handleDelete} className="btn btn-danger">
        Remove
      </button>
    </>
  );
}
