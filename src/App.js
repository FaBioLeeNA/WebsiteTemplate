import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

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
            <ContactPage></ContactPage>
          </Route>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
        </Switch>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
