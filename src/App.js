import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/portfolio">
            about
          </Route>
          <Route exact path="/contact">
            users
          </Route>
          <Route exact path="/">
            home
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
