import React, { Component } from 'react';

export default class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id
        }
    }

    render() {
        return (
            <>
                <h1>Todo</h1>
                <div className="container">
                    <div className="alert alert-warning">Enter valid values</div>
                    <div className="alert alert-warning">Enter valid Target Date</div>
                    <div className="alert alert-warning"> Enter atleast 5 characters in Description</div >

                    <form>
                        <fieldset className="form-group">
                            <label>Description</label>
                            <input type="text" className="form-control"
                                name="description" required="required" minLength="5" />
                        </fieldset>

                        <fieldset className="form-group">
                            <label>Target Date</label>
                            <input type="date" className="form-control" name="targetDate" required="required" />
                        </fieldset>

                        <button type="submit" className="btn btn-success">Save</button>
                    </form >
                </div >
            </>
        );
    }
}