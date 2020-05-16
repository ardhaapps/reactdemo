import React, { Component } from "react";
import axios from "axios";
import NewsPannelList from './NewsPannel.js';
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";


class NewsListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsList: [],
            totalResults:'',
            activePage:1
        };
        this.handlePageChange = this.handlePageChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        axios.get('https://newsapi.org/v2/top-headlines?country=in&category='+nextProps.match.params.id+'&apiKey=c7435f5bfd644928907a8409f392c577').then(
            (res) => {
                    console.log(res.data);

                this.setState({ newsList: res.data.articles,totalResults:'Total News : '+res.data.totalResults });
            },
            (error) => {
                console.log(error);
            }
        );
    }

    componentDidMount() {
        if (this.props.match.params.id === undefined) {
              axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=c7435f5bfd644928907a8409f392c577`).then(
                (res) => {
                    this.setState({ newsList: res.data.articles,totalResults:'Total News : '+res.data.totalResults });
                },
                (error) => {
                    console.log(error);
                }
            );
        }else{
            axios.get('https://newsapi.org/v2/top-headlines?country=in&category='+this.props.match.params.id+'&apiKey=c7435f5bfd644928907a8409f392c577').then(
                (res) => {
                    this.setState({ newsList: res.data.articles,totalResults:'Total News : '+res.data.totalResults });
                },
                (error) => {
                    console.log(error);
                }
            );
        }
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    render() {
        const totalResults = this.state.totalResults;
        const newsList = this.state.newsList;
        return (
            <div>
                <div class="btn-group">
                    <Link to='/news/' class="btn btn-primary">All News</Link>
                    <Link to='/news/entertainment' class="btn btn-primary">entertainment</Link>
                    <Link to='/news/general' class="btn btn-primary">general</Link>
                    <Link to='/news/health' class="btn btn-primary">health</Link>
                    <Link to='/news/science' class="btn btn-primary">science</Link>
                    <Link to='/news/sports' class="btn btn-primary">sports</Link>
                    <Link to='/news/technology' class="btn btn-primary">technology</Link>
                    <Link to='/news/business' class="btn btn-primary">business</Link>
                </div>
                <p>{totalResults}</p>
                {newsList.map((newsList, index) => {
                    return <NewsPannelList newsList={newsList} />;
                })}

                 <Pagination
                  activePage={this.state.activePage}
                  itemsCountPerPage={1}
                  totalItemsCount={10}
                  pageRangeDisplayed={3}
                  onChange={this.handlePageChange}
                />
               
            </div>
        );
    }
}

export default NewsListComponent;
