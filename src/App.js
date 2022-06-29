import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { FavMovies } from "./Pages/FavMovies";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favmovies" element={<FavMovies />} />
      </Routes>
    </>
  );
}

export default App;
