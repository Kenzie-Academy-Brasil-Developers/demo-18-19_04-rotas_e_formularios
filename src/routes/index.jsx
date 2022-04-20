import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Users from "../pages/Users";
import Profile from "../pages/Profile";
import RegisterForm from "../pages/RegisterForm";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route path="/login">
        <Login />
      </Route>

      <Route exact path="/users" component={Users} />
      <Route path="/users/:id" component={Profile} />
      <Route path="/register" component={RegisterForm} />
    </Switch>
  );
};

export default Routes;
