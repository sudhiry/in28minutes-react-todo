import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import UserContext from './UserContext';
import Menu from './menu';
import Footer from './footer';
import Login from './login';
import Welcome from './welcome';
import Todos from './todos';
import Logout from './logout';

class App extends Component {

  constructor(props) {
    super(props);
    this.authRoute = this.authRoute.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      isAuthenticated: false,
      username: '',
      email: ''
    }
  }

  login({isAuthenticated, username}) {
    this.setState({
      isAuthenticated,
      username
    });
  }

  logout() {
    this.setState({
      isAuthenticated: false
    });
  }

  authRoute({ component: Component, ...rest }) {
    return (
      <Route {...rest} render={props =>
        <UserContext.Consumer>
          {value => value.isAuthenticated ? (<Component {...props} />) : (
            <Redirect to={{
              pathname: "/login",
              state: { from: props.location }
            }} />
          )}
        </UserContext.Consumer>
      }
      />);
  }
  
  render() {
    const AuthRoute = this.authRoute;
    return (
      <Router>
        <UserContext.Provider value={{ ...this.state, login: this.login, logout: this.logout }}>
          <Menu />
          <div className="container">
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <AuthRoute path="/welcome/:username" component={Welcome} />
            <AuthRoute path="/todos" component={Todos} />
            <AuthRoute path="/logout" component={Logout} />
          </div>
          <Footer />
        </UserContext.Provider>
      </Router>
    );
  }
}

export default App;
