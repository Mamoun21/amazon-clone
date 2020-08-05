import React from "react";
import "./App.css";
// import { Provider } from "react-redux";
// import store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Header from "./component/header/Header";
// import Home from "./pages/home/Home";
import Header from "./Header";
import Home from "./Home";
function App() {
  return (
    // <Provider store={store}>
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout Page</h1>
          </Route>
          <Route path="/login">
            <h1>Login Page</h1>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    // </Provider>
  );
}

export default App;
