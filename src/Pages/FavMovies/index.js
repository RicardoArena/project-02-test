import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

export function FavMovies() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    owner: "",
    description: "",
    movies: [],
  });

  const [movie, setMovie] = useState([]);

  const [selectMovie, setSelectMovie] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?api_key=3cf31610cbc3a8a0d770a6b249701f08"
        );
        setMovie(response.data.results);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMovies();
  }, []);

  function handleChange(e) {
    e.preventDefault();

    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  }

  function handleClick(e) {
    console.log(handleClick);
    e.preventDefault();

    setForm({ ...form, movies: [...form.movies, selectMovie] });
    toast.success("Seu filme foi adicionado à sua coleção.");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("https://ironrest.herokuapp.com/ricardoarena", form);

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <label htmlFor="owner-input">Nome:</label>
        <input
          id="owner-input"
          value={form.owner}
          type="string"
          name="owner"
          onChange={handleChange}
        />
        <label htmlFor="description-input">Descrição:</label>
        <input
          id="description-input"
          value={form.description}
          type="string"
          name="description"
          onChange={handleChange}
        />

        <h2>Escolha seus filmes favoritos:</h2>
        <label>Filmes:</label>

        <select
          value={selectMovie}
          onChange={(e) => setSelectMovie(e.target.value)}
        >
          {movie.map((currentElement) => {
            return (
              <option value={currentElement.original_title}>
                {currentElement.original_title}
              </option>
            );
          })}
        </select>

        <button onClick={handleClick} type="button">
          Adicionar Filme
        </button>
        <button onClick={handleSubmit} type="submit">
          Enviar
        </button>
      </form>
    </>
  );
}
