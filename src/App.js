import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import PokemonsPage from "./pages/PokemonsPage";
import AdvicesPage from "./pages/AdvicesPage";
import CocktailsPage from "./pages/CocktailsPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/cocktails" component={CocktailsPage} />
        <Route path="/advices" component={AdvicesPage} />
        <Route path="/pokemons" component={PokemonsPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
