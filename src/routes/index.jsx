import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Users from "../pages/Users";
import Profile from "../pages/Profile";
import RegisterForm from "../pages/RegisterForm";
import { useState } from "react";

const Routes = () => {
  const [user, setUser] = useState({});
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/login">
        <Login user={user} />
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
