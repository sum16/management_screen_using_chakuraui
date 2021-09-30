import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../components/pages/Login";

import { HomeRoutes } from "./HomeRoutes";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      {/* <Route></Route>で囲う代わりにrender関数を使える */}
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {/* mapメソッドを使うときはkeyを指定してあげる */}
            {HomeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`} // /home配下のパスになることに注意 /home/user_management
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
    </Switch>
  );
});
