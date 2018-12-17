import React, { Component } from 'react';
import UserContext from '../UserContext';

export default class Login extends Component {

    static contextType = UserContext;

    constructor(props) {
        super(props);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            username: 'in28minutes',
            password: '',
            invalidLogin: false,
            errorMessage: 'Invalid Credentials',
        }
    }

    handleUsernameChange(event) {
        // this.setState((state, props) => ({
        //     username: event.target.value
        // }));
        this.setState({ username: event.target.value });
    }

    handlePasswordChange(event) {
        // this.setState((state, props) => ({
        //     password: event.target.value
        // }));
        this.setState({ password: event.target.value });
    }

    handleLogin() {
        // console.log(this.state.username);
        if (this.state.username === "in28minutes" && this.state.password === 'dummy') {
            // if (this.hardcodedAuthenticationService.authenticate(this.state.username, this.state.password)) {
            //Redirect to Welcome Page
            // this.setState((state, props) => ({
            //     invalidLogin: false
            // }));
            this.setState({
                invalidLogin: false
            });
            this.context.login({isAuthenticated: true, username: this.state.username});
            this.props.history.push(`/welcome/${this.state.username}`)

        } else {
            // this.setState((state, props) => ({
            //     invalidLogin: true
            // }));
            this.setState({
                invalidLogin: true
            });
        }
    }

    render() {
        return (
            <>
                <h1>Login!</h1>
                <div className="container">
                    {this.state.invalidLogin && <div className="alert alert-warning">{this.state.errorMessage}</div>}
                    <div>
                        User Name : <input type="text" name="username" value={this.state.username} onChange={this.handleUsernameChange} />
                        Password  : <input type="password" name="password" value={this.state.password} onChange={this.handlePasswordChange} />
                        {/* User Name : {this.state.username} */}
                        <button onClick={this.handleLogin} className="btn btn-success">Login</button>
                    </div >
                </div>
            </>
        );
    }
}