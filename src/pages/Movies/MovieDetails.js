import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

export default function MovieDetails() {
  const { imdb_id } = useParams();
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `https://omdbapi.com/?apikey=6a06f383&i=${imdb_id}`
      ).then((r) => r.json());

      setMovieData(data);
    }

    fetchData();
  }, [imdb_id]);

  return (
    <div className="moviepage">
      {movieData ? (
        <>
          <h1>{movieData.Title}</h1>

          <div className="movie_details">
            <img alt={movieData.Title} src={movieData.Poster} />
            <div>
              <div className="info_details">
                {movieData.Genre.split(", ").map((genre, index) => (
                  <span
                    style={{
                      border: "2px solid gray",
                      borderRadius: "50%",
                      backgroundColor: "gray",
                      padding: "20px",
                      marginLeft: "30px",
                    }}
                    key={index}
                    className="genre">
                    {genre}
                  </span>
                ))}
              </div>
              <div className="more_info_details">
                <h3>Director</h3>
                <p>{movieData.Director}</p>
                <h3>Language</h3>
                <p>{movieData.Language}</p>
                <h3>Plot</h3>
                <p>{movieData.Plot}</p>
                <h3>IMDB Rating</h3>
                <p>{movieData.imdbRating}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}
