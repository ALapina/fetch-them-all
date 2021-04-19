import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//components
import Header from "./components/Header";
import UsersList from "./components/UsersList";
import UserDetails from "./components/UserDetails";
import CreateNewUser from "./components/CreateNewUser";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/user">
          <UserDetails />
        </Route>
        <Route path="/create-new-user">
          <CreateNewUser />
        </Route>
        <Route path="/">
          <UsersList />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;