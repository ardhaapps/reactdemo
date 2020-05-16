import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            isLoggedIn: localStorage.getItem("isLoggedIn")
        };
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout(e){
        this.setState({isLoggedIn:!this.state.isLoggedIn});
        localStorage.removeItem('isLoggedIn');
        this.props.history.push('/login');
    }

    render() {
        const isLoggedIn  = this.state.isLoggedIn;
        return (
            <nav className="navbar navbar-expand-md navbar-default fixed-top bg-dark">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed pull-left"
                            data-toggle="collapse"
                            data-target="#navbar"
                            aria-expanded="false"
                            aria-controls="navbar"
                        >
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className={"navbar-brand"}>
                            Cloudstar
                        </Link>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <Link to="/post-office">Post Office {isLoggedIn}</Link>
                            </li>
                            <li>
                                <Link to="/country">Country</Link>
                            </li>
                            <li>
                                <Link to="/news">News</Link>
                            </li>
                             <li>
                                <Link to="/book">Book</Link>
                            </li>
                            <li className="dropdown">
                                <a
                                    href="#"
                                    className="dropdown-toggle"
                                    data-toggle="dropdown"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Dropdown <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#">Another action</a>
                                    </li>
                                    <li>
                                        <a href="#">Something else here</a>
                                    </li>
                                    <li
                                        role="separator"
                                        className="divider"
                                    ></li>
                                    <li className="dropdown-header">
                                        Nav header
                                    </li>
                                    <li>
                                        <a href="#">Separated link</a>
                                    </li>
                                    <li>
                                        <a href="#">One more separated link</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li className="active">
                                {isLoggedIn?<button className="btn btn-danger" onClick={this.handleLogout}>Logout</button>:<Link to="/login">Login</Link>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavbarComponent;
