import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import PokemonsPage from "./pages/PokemonsPage";
import AdvicesPage from "./pages/AdvicesPage";
import CocktailsPage from "./pages/CocktailsPage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/movie/:imdb_id" component={MovieDetails} />
        <Route path="/discover/:params?" component={MoviesPage} />
        <Route path="/cocktails" component={CocktailsPage} />
        <Route path="/advices" component={AdvicesPage} />
        <Route path="/pokemons" component={PokemonsPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
