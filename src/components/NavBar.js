import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <NavLink
        className="home"
        activeStyle={{ fontWeight: "bold" }}
        to="/"
        exact>
        Home
      </NavLink>
      {/* {" | "} */}
      <NavLink
        className="pokemons"
        activeStyle={{ fontWeight: "bold" }}
        to="/pokemons"
        exact>
        Pokemons
      </NavLink>

      <NavLink
        className="advices"
        activeStyle={{ fontWeight: "bold" }}
        to="/advices"
        exact>
        Advices
      </NavLink>

      <NavLink
        className="cocktails"
        activeStyle={{ fontWeight: "bold" }}
        to="/cocktails">
        Cocktails
      </NavLink>

      <NavLink
        className="movies"
        activeStyle={{ fontWeight: "bold" }}
        to="/movies">
        Movies
      </NavLink>
    </div>
  );
}
