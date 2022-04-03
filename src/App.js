import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./component/Nav";
import { Home } from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "./data/projects";

function App() {
  const imagesToPreload = [
    "boards.jpg",
    "coasters.jpg",
    "coasters2.jpg",
    "coffee_table.jpg",
    "coffee_table2.jpg",
    "coffee_table3.jpg",
    "coffee_table4.jpg",
    "cutting.jpg",
    "dining.jpg",
    "dining2.jpg",
    "nightstand.jpg",
    "nightstand2.jpg",
    "pencil.jpg",
    "pencil2.jpg",
    "shelf.jpg",
    "tea_tray.jpg",
    "tea_tray2.jpg",
  ];
  // Download all image assets in advance
  // imagesToPreload.forEach((preloadAsset) => {
  //   new Image().src = preloadAsset;
  // });

  return (
    <Router>
      <Nav />

      <Home />

      {/* <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch> */}
    </Router>
  );
}

export default App;
