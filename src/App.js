import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home/HomePage";
import PokemonsPage from "./pages/Pokemon/PokemonsPage";
import AdvicesPage from "./pages/Advices/AdvicesPage";
import CocktailsPage from "./pages/Cocktails/CocktailsPage";
import MoviesPage from "./pages/Movies/MoviesPage";
import MovieDetails from "./pages/Movies/MovieDetails";

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
