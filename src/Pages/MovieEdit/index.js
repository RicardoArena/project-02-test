import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { Link } from "react-router-dom";

export function EditMovie() {
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
    e.preventDefault();
    setForm({ ...form, movies: selectMovie });
    toast.success("Seu filme foi adicionado à coleção com sucesso!");
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
  return <h1>Editar:</h1>;
}
