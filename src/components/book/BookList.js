import React, { Component } from "react";
import {BookArray} from './BookArray.js';


class BookListComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            booksList:[],
            book:[],
            bookTitle:'',
            bookLink:'',
            bookSource:''
        }
    }

     handleClick1(book, e){
        this.setState({bookLink:book['link'],bookTitle:book['title'],bookSource:book['source']});  
    }

    componentDidMount() {
        this.setState({ book: BookArray[this.props.bookListindex],booksList: BookArray[this.props.bookListindex]['books']});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ book: BookArray[nextProps.bookListindex],booksList: BookArray[nextProps.bookListindex]['books']});
    }

    bookPdfRender(){
        if(this.state.bookLink !=''){
            if(this.state.bookSource ==='drive'){
                var url = 'https://drive.google.com/file/d/'+this.state.bookLink+'/preview';
            }else{
                var url = this.state.bookLink;
            }
            return  <div class="panel panel-default">
                        <div class="panel-heading">{this.state.bookTitle}</div>
                        <div class="panel-body"><embed key={Date.now()} src={url} width= "530" height= "550"/></div>
                    </div>
        }else{
            return '';
        }
    }

    render() {
        const booksList = this.state.booksList;
        return (
            <div>
                <div class="col-xs-3">
                    <ul class="list-group">
                        {booksList.map((book,index)=>{
                            return <li class="list-group-item"><a onClick={this.handleClick1.bind(this, book)}>{book['title']}</a></li>;
                        })}
                    </ul>
                </div>
                <div class="col-xs-6">
                    {this.bookPdfRender()}
                </div>
            </div>
        );
    }
}

export default BookListComponent;
