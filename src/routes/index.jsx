import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Users from "../pages/Users";
import Profile from "../pages/Profile";
import RegisterForm from "../pages/RegisterForm";
import { useState } from "react";

const Routes = () => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState("");

  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/login">
        <Login setUser={setUser} setToken={setToken} />
      </Route>

      <Route exact path="/users" component={Users} />
      <Route path="/users/:id" component={Profile} />
      <Route path="/register">
        <RegisterForm setUser={setUser} />
      </Route>
    </Switch>
  );
};

export default Routes;
