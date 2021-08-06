import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import store from "./store";

// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

const App: React.FC = () => {
  // useEffect(() => {
  //   store.dispatch(loadUser() as any);
  // }, []);
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </React.Fragment>
      </Router>
    </Provider>
  );
};

export default App;
