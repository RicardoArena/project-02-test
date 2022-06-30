import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { FavMovies } from "./Pages/FavMovies";
import { MoviePages } from "./Pages/MoviePage";
import { EditMovie } from "./Pages/MovieEdit";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favmovies" element={<FavMovies />} />
        <Route path="/movie/:id" element={<MoviePages />} />
        <Route path="/editmovie/:id" element={<EditMovie />} />
      </Routes>
    </>
  );
}

export default App;
