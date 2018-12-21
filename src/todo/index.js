import React, { Component } from 'react';
import moment from 'moment';
import './todo.css';
import Service from '../services';

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.saveTodo = this.saveTodo.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleTargetDateChange = this.handleTargetDateChange.bind(this);
        this.state = {
            id: props.match.params.id,
            description: '',
            targetDate: '',
            invalidDscription: false,
            invalidTargetDate: false,
        }
    }

    componentDidMount() {
        if (this.state.id != -1) {
            Service.retrieveTodo('in28minutes', this.state.id).then(response => {
                this.setState({
                    ...response.data, targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
                })
            });
        }
    }

    validateForm() {
        let invalidDscription = !this.state.description || this.state.description.length < 5;
        let invalidTargetDate = !moment(this.state.targetDate).isValid();
        this.setState({
            invalidDscription,
            invalidTargetDate
        })
        return invalidDscription || invalidTargetDate;

    }

    saveTodo(e) {
        e.stopPropagation();
        if(this.validateForm()) {
            return;
        }
        if (this.state.id === -1) {
            Service.createTodo('in28minutes', {
                description: this.state.description,
                targetDate: this.state.targetDate
            }).then(response => {
                console.log(response.data);
                this.props.history.push('/todos');
            });
        } else {
            Service.updateTodo('in28minutes', this.state.id, {
                id: this.state.id,
                description: this.state.description,
                targetDate: this.state.targetDate
            }).then(response => {
                console.log(response.data);
                this.props.history.push('/todos');
            });
        }
    }

    handleDescriptionChange(e) {
        this.setState({
            invalidDscription: e.target.value.length < 5,
            description: e.target.value
        });
    }

    handleTargetDateChange(e) {
        this.setState({
            invalidTargetDate: !moment(e.target.value).isValid(),
            targetDate: moment(e.target.value).format('YYYY-MM-DD')
        });
    }

    render() {
        const { description, targetDate = ''} = this.state || {};
        return (
            <>
                <h1>Todo</h1>
                <div className="container">
                    {(this.state.invalidTargetDate || this.state.invalidDscription) && 
                        <div className="alert alert-warning">Enter valid values</div>}
                    {this.state.invalidTargetDate && 
                        <div className="alert alert-warning">Enter valid Target Date</div>}
                    {this.state.invalidDscription && 
                        <div className="alert alert-warning"> Enter atleast 5 characters in Description</div >}
                    <form>
                        <fieldset className="form-group">
                            <label>Description</label>
                            <input type="text" className={`form-control ${this.state.invalidDscription && 'invalid'}`}
                                name="description" value={description} onChange={this.handleDescriptionChange} />
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Target Date</label>
                            <input type="date" className={`form-control ${this.state.invalidTargetDate && 'invalid'}`} name="targetDate"
                                value={targetDate} onChange={this.handleTargetDateChange} onBlur={this.handleTargetDateChange} />
                        </fieldset>
                        <button type="button" className="btn btn-success" onClick={this.saveTodo} >Save</button>
                    </form >
                </div >
            </>
        );
    }
}