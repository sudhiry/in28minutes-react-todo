import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Menu extends Component {
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
                            <Link to="/welcome/in28minutes" className="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link to="/todos" className="nav-link">Todos</Link>
                        </li>
                    </ul>

                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li>
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li>
                            <Link to="/logout" className="nav-link">Logout</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

