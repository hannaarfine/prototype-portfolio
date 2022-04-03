import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./component/Nav";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
