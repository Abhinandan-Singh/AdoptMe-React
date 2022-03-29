import { StrictMode, useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
// import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
// import Details from './Details';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const theme = useState("crimson");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Suspense fallback={<h2>Loading Components</h2>}>
          <Router>
            <header>
              <Link to="/">
                <h1>Adopt me</h1>
              </Link>
            </header>
            <Switch>
              <Route path="/details/:id">
                <Details />
              </Route>
              <Route path="/">
                <SearchParams />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
