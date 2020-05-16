import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class CountryTableList extends Component {
    render() {
        const country = this.props.country;
        return (
            <tr key={country.alpha2Code}>
                <td>
                    <NavLink to={"country/" + country.alpha2Code}>
                        {country.name} - {country.alpha2Code}
                    </NavLink>
                </td>
                <td>
                    <img src={country.flag} height="20px" />
                </td>
                <td>{country.capital}</td>
            </tr>
        );
    }
}

export default CountryTableList;
