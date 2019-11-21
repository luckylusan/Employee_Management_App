import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addEmployee} from "../../actions/employees";

class Form extends Component {
    state = {
        employee_id:'',
        name: '',
        surname: '',
        email: ''
    };

    static propTypes = {
        addEmployee: PropTypes.func.isRequired
    }

    onChange = e => this.setState({[e.target.name]:e.target.value});

    onSubmit = e => {
        e.preventDefault();
        const {employee_id, name, surname, email} = this.state;
        const employee = {employee_id, name, surname, email};
        this.props.addEmployee(employee);
    }

    render() {
        const {employee_id,name,surname,email} = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Lead</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>ID</label>
                        <input
                            className="form-control"
                            type="text"
                            name="employee_id"
                            onChange={this.onChange}
                            value={employee_id}
                        />
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Surname</label>
                        <input
                            className="form-control"
                            type="text"
                            name="surname"
                            onChange={this.onChange}
                            value={surname}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, {addEmployee})(Form);