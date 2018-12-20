import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Service from '../services';

export default class Welcome extends Component {

    constructor(props) {
        super(props);
        this.getWelcomeMessageWithParameter = this.getWelcomeMessageWithParameter.bind(this);
        this.state = {
            welcomeMessageFromService : '',
            name: props.match.params.username
        }
    }

    getHelloWorldBean() {
        Service.asyncexecuteHelloWorldBeanService().then((res) => {
            this.setState({
                welcomeMessageFromService: res.data.message
            });
        }).catch((error) => {
            this.setState({
                welcomeMessageFromService: error.data.message
            });
        });
    }

    getWelcomeMessageWithParameter(e) {
        Service.executeHelloWorldServiceWithPathVariable(this.state.name).then((res) => {
            this.setState({
                welcomeMessageFromService: res.data.message
            });
        }).catch((error) => {
            this.setState({
                welcomeMessageFromService: error.data.message
            });
        });
    }

    render() {
        return (
            <>
                <h1>Welcome!</h1>
                <div className="container">
                    Welcome {this.state.name}. You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here to get a customized welcome message 
                    <button onClick={this.getWelcomeMessageWithParameter} className="btn btn-success">
                        Get Welcome Message
                    </button>
                </div>
                <div className="container">
                {this.state.welcomeMessageFromService && 
                    <>
                        <h2>Your Customized Welcome Message</h2>
                        {this.state.welcomeMessageFromService}
                    </>
                }
                </div>
            </>
        )
    }
}