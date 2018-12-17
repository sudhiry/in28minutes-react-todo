import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';

export default class Menu extends Component {

    static contextType = UserContext;

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div>
                        <a href="https://www.in28minutes.com" className="navbar-brand">
                            in28minutes</a>
                    </div>

                    <ul className="navbar-nav">
                        <li>
                            {this.context.isAuthenticated && <Link to="/welcome/in28minutes" className="nav-link">Home</Link>}
                        </li>
                        <li>
                            {this.context.isAuthenticated && <Link to="/todos" className="nav-link">Todos</Link>}
                        </li>
                    </ul>

                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li>
                            {!this.context.isAuthenticated && <Link to="/login" className="nav-link">Login</Link>}
                        </li>
                        <li>
                            {this.context.isAuthenticated && <Link to="/logout" className="nav-link" onClick={this.context.logout}>Logout</Link>}
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

