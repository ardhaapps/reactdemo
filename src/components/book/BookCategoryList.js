import React, { Component } from "react";
import {BookArray} from './BookArray.js';
import BookListComponent from './BookList.js';

class BookCategoryList extends Component {
    constructor(props) {
        super(props);
        this.state = {bookTitleIndex:0}
    }

    handleClick(bookTitle, e){
        this.setState({bookTitleIndex:bookTitle});  
    }

    _bookTitleListRender(){
        return <BookListComponent bookListindex={this.state.bookTitleIndex}/>;
    }
   

    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-xs-3">
                          <ul class="list-group">
                            {BookArray.map((BookArra,index)=>{
                                return <li class="list-group-item"><a onClick={this.handleClick.bind(this, index)}>{BookArra['title']} <span class="badge">{BookArra['books'].length}</span></a></li>;
                            })}
                        </ul>
                    </div>
                    {this._bookTitleListRender()}
                </div>
            </div>
        );
    }
}

export default BookCategoryList;
