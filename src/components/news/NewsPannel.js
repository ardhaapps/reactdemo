import React, { Component } from "react";

class NewsPannelList extends Component {
    render() {
        const newsList = this.props.newsList;
        return (
             <div className="panel panel-default">
              <div className="panel-heading"><h5><a href={newsList.url} target="blank">{newsList.title}</a></h5><small>{newsList.author}</small></div>
              <div className="panel-body">
              <div className="row">
                    <div className="col-sm-8">
                        <center>{newsList.content}</center>
                        <p>{newsList.description}</p>
                    </div>
                    <div className="col-sm-4">
                        <img src={newsList.urlToImage} height="90px"/>
                    </div>
                </div>
                
              </div>
            </div>
        );
    }
}

export default NewsPannelList;
