import { Router,Route,Switch,withRouter } from "react-router-dom";
import React, { Component } from "react";
import PostOfficeComponent from "./components/postoffice/PostofficeComponent.js";
import CountryComponent from "./components/country/CountryComponent.js";
import CountryDetailComponent from "./components/country/CountryDetailComponent.js";
import NewsListComponent from "./components/news/NewsList.js";
import BookCategoryList from "./components/book/BookCategoryList.js";
import Index from "./components/index.js";
import LoginFormComponent from './components/login/LoginForm.js'
import NavbarComponent from "./components/layout/NavComponent.js";


class Routers extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        };
    }

    // handleChange = () => {
    //     this.setState(
    //         {
    //             isLoggedIn: !this.state.isLoggedIn
    //         },
    //         () => {
    //             localStorage.getItem("isLoggedIn");
    //         }
    //     );
    // };

    render() {
        console.log(this.props);
        return (
            
                <Switch>
             <Route
                    path="/"
                    exact
                    component={Index}
                ></Route>
                <Route
                    path="/post-office"
                    exact
                    component={PostOfficeComponent}
                ></Route>
                <Route 
                    path="/country" 
                    component={CountryComponent}
                ></Route>
                <Route
                    path="/country/:id"
                    exact
                    component={CountryDetailComponent}
                ></Route>
                 <Route
                    path="/news"
                    exact
                    component={NewsListComponent}
                ></Route>
                 <Route
                    path="/news/:id"
                    exact
                    component={NewsListComponent}
                ></Route>
                 <Route
                    path="/book"
                    exact
                    component={BookCategoryList}
                ></Route>
                <Route
                    path="/login"
                    exact
                    component={LoginFormComponent}></Route>
                </Switch>
           
        );
    }
}
export default withRouter(Routers);
