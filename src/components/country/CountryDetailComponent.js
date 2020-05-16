import React, { Component } from "react";
import axios from "axios";

class CountryDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryList: [],
            currencies:[],
            languages:[],

        };
    }

    componentDidMount() {
        axios
            .get(
                `https://restcountries.eu/rest/v2/alpha/` +
                    this.props.match.params.id
            )
            .then(
                (res) => {
                    this.setState({ countryList: res.data,currencies:res.data.currencies,languages:res.data.languages });
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    render() {
        const countryList = this.state.countryList;
        const currencies = this.state.currencies;
        const languages = this.state.languages;
        console.log(countryList);
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    {countryList.name} ({countryList.nativeName}){" "}
                    <img src={countryList.flag} height="20px" />{" "}
                    <span className="pull-right">{countryList.capital}</span>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-sm-4">
                            <p><strong> Region :</strong>{countryList.region}</p>
                            <p><strong> Calling Codes :</strong> +{countryList.callingCodes}</p>
                        </div>
                        <div className="col-sm-4">
                            <p><strong> Sub Region :</strong>{countryList.subregion}</p>
                            <span>Currencies</span>
                            <ul className="list-group">
                                {currencies.map((curr,index)=>{
                                    return <li className="list-group-item">{curr.name} ({curr.symbol}) </li>
                                })}
                            </ul>
                        </div>
                        <div className="col-sm-4">
                             <span>Language</span>
                            <ul className="list-group">
                                {languages.map((lang,index)=>{
                                    return <li className="list-group-item">{lang.name} ({lang.nativeName}) </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CountryDetailComponent;
