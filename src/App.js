import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { FavMovies } from "./Pages/FavMovies";
import { MoviePages } from "./Pages/MoviePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favmovies" element={<FavMovies />} />
        <Route path="/movie/:id" element={<MoviePages />} />
      </Routes>
    </>
  );
}

export default App;
