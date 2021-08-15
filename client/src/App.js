import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/layout/Navbar";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import About from "./components/layout/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import DS from "./components/content/DS"
import Python_essentials from "./components/content/pages/python/Python_essential"
import Python_DS_CS from "./components/content/pages/python/Python_DS_CS"
import Java_CFW from "./components/content/pages/Java/Java_CFW"
import Java_DS_CS from "./components/content/pages/Java/Java_DS_CS"
import Cpp_STL from "./components/content/pages/C++/Cpp_STL"
import Cpp_DS_CS from "./components/content/pages/C++/Cpp_DS_CS"


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Navigation />
            <Route exact path="/" component={About} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/data-structure" component={DS} />
              <PrivateRoute exact path="/content/python/python_essentials" component={Python_essentials} />
              <PrivateRoute exact path="/content/python/Python_DS_CS" component={Python_DS_CS} />
              <PrivateRoute exact path="/content/java/Java_CFW" component={Java_CFW} />
              <PrivateRoute exact path="/content/java/Java_DS_CS" component={Java_DS_CS} />
              <PrivateRoute exact path="/content/C++/Cpp_STL" component={Cpp_STL} />
              <PrivateRoute exact path="/content/C++/Cpp_DS_CS" component={Cpp_DS_CS} />
            </Switch>
            <Footer /> 
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;