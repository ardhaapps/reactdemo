import React, { Component } from "react";
import axios from "axios";
import Panel from "./Panel.js";

class PostOfficeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pincode: "",
            message: "",
            postOffice: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ pincode: event.target.value });
    }

    postOfficehandler = (event) => {
        event.preventDefault();
        console.log(this.state.pincode);
        axios
            .get(`https://api.postalpincode.in/pincode/` + this.state.pincode)
            .then(
                (res) => {
                    if (
                        res.status === 200 &&
                        res.data[0]["PostOffice"] != null
                    ) {
                        this.setState({
                            message: res.data[0]["Message"],
                            postOffice: res.data[0]["PostOffice"],
                        });
                    } else {
                        this.setState({
                            message: "Please Enter Valid pincode and try again",
                            postOffice: [],
                        });
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
    };
    render() {
        const postOffice = this.state.postOffice;
        return (
            <div>
                <form onSubmit={this.postOfficehandler}>
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="form-group">
                                <label for="email">Pincode:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.state.pincode}
                                    onChange={this.handleChange}
                                    placeholder="Enter pincode"
                                    name="pincode"
                                />
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <br />
                            <button type="submit" className="btn btn-primary">
                                Get Postoffice
                            </button>
                        </div>
                    </div>
                </form>
                {this.state.message}
                {postOffice.map((branch) => {
                    return <Panel branch={branch} />;
                })}
            </div>
        );
    }
}

export default PostOfficeComponent;
