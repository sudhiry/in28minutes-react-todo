import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Menu from './menu';
import Footer from './footer';
import Login from './login';
import Welcome from './welcome';


class App extends Component {
  
  render() {
    return (
      <Router>
        <>
          <Menu />
          <div className="container">
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/welcome/:username" component={Welcome} />
          </div>
          <Footer />
        </>
      </Router>
    );
  }
}

export default App;
