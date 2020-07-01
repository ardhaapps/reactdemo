import React, { Component } from "react";
import axios from "axios";

class LoginFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '1234567890',
            password: '123456',
            isLoggedIn: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        var data = {
            'email': this.state.email,
            'password': this.state.password
        };
        axios.post('http://myvehicle.mohan.work/api/login', data).then(
            (res) => {
                localStorage.setItem("user_token", res.data.data['token']);
                localStorage.setItem("isLoggedin", true);
                this.props.history.push('/country');
            },
            (error) => {
                console.log(error);
            }
        );
    }
    // handleInput(propertyName,evt) {
    //     this.setState({ [propertyName]: evt.target.value });
    // }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const { email, password } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <div className="panel panel-default">
                            <div className="panel-heading">Login</div>
                            <div className="panel-body">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label for="email">User Name:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={email}
                                                    onChange={this.handleChange}
                                                    placeholder="Enter User Name"
                                                    name="email"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <label for="email">Password:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={password}
                                                    onChange={this.handleChange}
                                                    placeholder="Password"
                                                    name="password"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <br />
                                            <button type="submit" className="btn btn-primary">
                                                Login
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-2"></div>
                </div>

            </div>
        );
    }
}

export default LoginFormComponent;
