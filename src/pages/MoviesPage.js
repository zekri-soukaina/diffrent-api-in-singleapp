import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./MoviesPage.css";
import MovieItem from "../components/MovieItem";

export default function MoviesPage() {
  const history = useHistory();
  const { params } = useParams();

  const [searchText, set_searchText] = useState(params);

  const [state, setState] = useState({ status: "idle" });

  useEffect(() => {
    async function fetchData() {
      if (!params || params === "") {
        setState({ status: "idle" });
        return;
      }
      setState({ status: "searching" });

      const queryParam = encodeURIComponent(params);

      const data = await fetch(
        `https://omdbapi.com/?apikey=6a06f383&s=${queryParam}`
      ).then((r) => r.json());

      setState({ status: "done", data: data.Search });
    }

    fetchData();
  }, [params]);

  const navigateToSearch = (e) => {
    e.preventDefault();
    const routeParam = encodeURIComponent(searchText);
    history.push(`/discover/${routeParam}`);
  };

  return (
    <div className="box">
      <h1>What is Movie Name you looking for!</h1>
      <form onSubmit={navigateToSearch} className="form">
        <input
          value={searchText}
          onChange={(e) => set_searchText(e.target.value)}
          placeholder="name goes here.."
        />
        <button type="submit">Search</button>
      </form>

      {state.status === "idle" && (
        <p>Type in a search term and click "Search" to start...</p>
      )}
      {state.status === "searching" && <p>Searching...</p>}
      {state.status === "done" && (
        <div>
          {state.data && state.data.length > 0 ? (
            <>
              <h2>Search results</h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",

                  flexWrap: "wrap",
                }}>
                {state.data.map((movie) => (
                  <MovieItem key={movie.imdbID} movie={movie} />
                ))}
              </div>
            </>
          ) : (
            <h2>No results!</h2>
          )}
        </div>
      )}
    </div>
  );
}
