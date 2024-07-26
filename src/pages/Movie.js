import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({});
  const [genres, setGenres] = useState([])
  const params = useParams();
  const movieId = params.id;

  useEffect(() =>{
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(r => r.json())
    .then(data => {
      setMovie(data)
      setGenres(data.genres)
    })
    .catch(error => console.error(error));
  }, [movieId]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time} minutes</p>
        {genres.map((genre) => (<span>{genre}</span>))}
      </main>
    </>
  );
};

export default Movie;
