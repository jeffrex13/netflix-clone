import React, { useEffect, useState } from "react";
import axios from "../axios";
import './Row.css';
import Youtube from "react-youtube";
import movieTrailer from 'movie-trailer'

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      //if [], run once when the row loads and don't run again
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

//   console.table(movies); 
const opts = {
    height: "390",
    width: "100%",
    playerVars: {
        //https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};

const handleClick = (movie) => {
    if (trailerUrl) {
        setTrailerUrl('');
    } else {
        movieTrailer(movie?.name || movie?.title || movie?.original_name).then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v')); 
        }).catch(error => console.log(error))
    }
}

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row-poster ${isLargeRow && "row-posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
