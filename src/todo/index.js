import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import moment from 'moment';
import './todo.css';
import Service from '../services';

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.validate = this.validate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            id: props.match.params.id,
            description: '',
            targetDate: ''
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

    validate(values) {
        let errors = {};
        if(!values.description) {
            errors.description = "Enter valid values";
        } else if(values.description.length < 5) {
            errors.description = "Enter atleast 5 characters in Description"
        }
        if(!moment(values.targetDate).isValid()) {
            errors.targetDate = "Enter valid Target Date"
        }
        return errors;
    }
    
    onSubmit(values) {
        if (this.state.id === -1) {
            Service.createTodo('in28minutes', {
                description: values.description,
                targetDate: values.targetDate
            }).then(response => {
                console.log(response.data);
                this.props.history.push('/todos');
            });
        } else {
            Service.updateTodo('in28minutes', this.state.id, {
                id: this.state.id,
                description: values.description,
                targetDate: values.targetDate
            }).then(response => {
                console.log(response.data);
                this.props.history.push('/todos');
            });
        }
    }

    render() {
        const { description, targetDate = ''} = this.state || {};
        return (
            <>
                <h1>Todo</h1>
                <div className="container">
                    <Formik 
                        initialValues={{ description, targetDate }}
                        validateOnBlur={false}
                        enableReinitialize={true}
                        validate={this.validate}
                        onSubmit={this.onSubmit}>
                        {({ errors, isSubmitting }) => (
                            <Form>
                                <ErrorMessage className="alert alert-warning" component="div" name="description" />
                                <ErrorMessage className="alert alert-warning" component="div" name="targetDate" />
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className={`form-control ${errors.description? 'invalid' : ''}`} type="text" name="description" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className={`form-control ${errors.targetDate? 'invalid' : ''}`} type="date" name="targetDate" />
                                </fieldset>
                                <button className="btn btn-success" type="submit" disabled={isSubmitting}>Save</button>
                            </Form>
                        )}
                    </Formik>
                </div >
            </>
        );
    }
}