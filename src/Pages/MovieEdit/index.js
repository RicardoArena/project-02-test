import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

export function EditMovie() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [form, setForm] = useState({
    owner: "",
    description: "",
    movies: [],
  });

  const [movie, setMovie] = useState([]);

  const [selectMovie, setSelectMovie] = useState([]);

  useEffect(() => {
    async function fetchEditMovies() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/ricardoarena/${id}`
        );
        setForm(...response.data);
        console.log(response);
        setMovie({ ...response.data.movies });
      } catch (err) {
        console.log(err);
      }
    }
    fetchEditMovies();
  }, [id]);

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
    e.preventDefault();
    setForm({ ...form, movies: [...form.movies, selectMovie] });
    toast.success("Seu filme foi adicionado à coleção com sucesso!");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const clone = { ...form };
      delete clone.id;
      await axios.put(
        `https://ironrest.herokuapp.com/ricardoarena/${id}`,
        clone
      );

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <label htmlFor="description-input">Descrição:</label>
        <input
          id="description-input"
          value={form.description}
          type="string"
          name="description"
          onChange={handleChange}
        />

        <h2>Edite sua coleção:</h2>
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
          Editar
        </button>
      </form>
    </>
  );
}
