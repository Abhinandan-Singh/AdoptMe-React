import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";
import Details from "./Details";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  const theme = useState("crimson");

  return (
    <ThemeContext.Provider value={theme}>
      <div
        className="p-0 m-0"
        style={{
          background:
            "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
        }}
      >
        <Router>
          <header className="w-full text-center p-7 mb-10 bg-gradient-to-b from-gray-50 via-pink-400 to-gray-500">
            <Link to="/" className="text-5xl text-gray-600 hover:text-gray-300">
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
