import React, { Component } from "react";
import axios from "axios";
import CountryTableList from "./TableList.js";

class CountryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            isLoggedIn: localStorage.getItem("isLoggedIn")
        };
        if(!this.state.isLoggedIn){
            this.props.history.push('/login');
        }
    }
    
    componentDidMount() {
        axios.get(`https://restcountries.eu/rest/v2/all`).then(
            (res) => {
                this.setState({ countries: res.data });
            },
            (error) => {
                console.log(error);
            }
        );
    }

    render() {
        return (
            <table className="table table-bordered table-hover ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Flag</th>
                        <th>Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.countries.map((country, index) => {
                        return <CountryTableList country={country} />;
                    })}
                </tbody>
            </table>
        );
    }
}

export default CountryComponent;
