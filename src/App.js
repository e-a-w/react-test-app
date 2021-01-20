import React from "react";
import Form from "./components/Form";
import Person from "./components/Person";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div id="container">
        <header>
          <h1>Hello World!</h1>
          <nav>
            <Link to="/">Home</Link>
            <span>||</span>
            <Link to="/about">About</Link>
            <span>||</span>
            <Link to="/search">API Test</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path="/">
            <h2>Welcome to the Test App</h2>
            <p>Testing is super fun!</p>
          </Route>
          <Route exact path="/about">
            <h2>About the Test App</h2>
            <p>This is somewhere you can test stuff!</p>
          </Route>
          <Route exact path="/search">
            <h2>API Test:</h2>
            <Form />
          </Route>
          <Route exact path="/api/person/:id" component={Person} />
          <Route path="/">
            <h2>Sorry, not found!</h2>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
