import React, { Component } from "react";
import axios from "axios";

class DailyInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            InformationList:[],
            date: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.informationHandler = this.informationHandler.bind(this);
    }

    componentDidMount() {
        console.log('asdas');
        axios.get(`http://content.nammatiruchengode.com/api/daily-information/today`).then(
            (res) => {
                this.setState({ InformationList: res.data.data.DailyInformations });
            },
            (error) => {
                console.log(error);
            }
        );
    }

    informationHandler(event){
        event.preventDefault();
        let date = this.state.date;
        if(date !=''){
            var arr1 = date.split('-');
            var month = arr1[1];
            var day = arr1[2];
            var newdate = month+'-'+day;
        }else{
            var d = new Date();
            function day_of_the_month(d){ 
                return (d.getMonth() < 10 ? '0' : '') + d.getMonth();
            }
            function day_of_the_day(d){ 
                return (d.getDate() < 10 ? '0' : '') + d.getDate();
            }
            var newdate = day_of_the_month(d)+'-'+day_of_the_day(d);
        }
        axios.get(`//content.nammatiruchengode.com/api/daily-information/day/`+newdate).then(
            (res) => {
                this.setState({ InformationList: res.data.data.DailyInformations });
            },
            (error) => {
                console.log(error);
            }
        );
    };


    handleChange(event) {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        const InformationList = this.state.InformationList;
        return (
            <div>
                <form onSubmit={this.informationHandler}>
                    <div className="row">
                        <div className="col-xs-6">
                        <input type="date" name="date" value={this.state.date} class="form-control" onChange={this.handleChange}/>
                    </div>
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-primary">
                                Get Information
                            </button>
                        </div>
                    </div>
                </form>
                <br/>
                <div className="row">
                 {InformationList.map((Information, index) => {
                  return  <div className="col-sm-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">{Information.title_tamil}</div>
                            <div className="panel-body">
                                <img src={Information.image} class="img-thumbnail" height="150px"/>
                                <p>{Information.content_tamil}</p>
                            </div>
                        </div>
                    </div>
                     })}
                </div>
            </div>
        );
    }
}

export default DailyInformation;
