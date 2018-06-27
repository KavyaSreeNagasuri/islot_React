import React, { Component } from 'react';
import "./interviewer-dashboard.css";
import 'bootstrap/dist/css/bootstrap.css';
import '../App';
import {Link} from 'react-router-dom';



export default class InterviewerDashBoard extends Component {
    constructor() {
        super();
        this.state = {
            recentEventArray: [
                {
                    endTime: "2.00pm",
                    eventDate: "06/20/2018",
                    eventName: "Angular walk-in",
                    id: "01",
                    isClosed: "false",
                    location: "hyderabad",
                    skill: "Angular",
                    slots: [
                        {
                            endTime: "10.00am",
                            id: "11",
                            noOfInterviewsEnrolled: [
                                {
                                    noOfInterviewsTaken: "15",
                                    userid: "1"
                                }
                            ],
                            startTime: "9.00am"
                        }

                    ]
                }
            ],
            upcomingEventArray : [
                {
                    endTime: "2.00pm",
                    eventDate: "06/20/2018",
                    eventName: "Angular walk-in",
                    id: "01",
                    isClosed: "false",
                    location: "hyderabad",
                    skill: "Angular",
                    slots: [
                        {
                            endTime: "10.00am",
                            id: "11",
                            noOfInterviewsEnrolled: [
                                {
                                    noOfInterviewsTaken: "15",
                                    userid: "1"
                                }
                            ],
                            startTime: "9.00am"
                        }

                    ]
                }
            ]
        }
    }
    signOut() {
       //Need to be written 
    }
    componentDidMount() {
        const self = this;
        var recevent = {};
        var upevent = {};
        var i1 = 0, i2 = 0;
        var event = {};
        fetch("https://pythonreact-f7420.firebaseio.com/event.json").then(res => res.json())
            .then(function (data) {
                var keys = Object.keys(data);
                for (var i = 0; i < keys.length; i++) {
                    var 
                    k = keys[i];
                    var date = data[k].eventDate;
                    var d1 = date.split('/');
                    var gm = d1[0];
                    var gd = d1[1];
                    var gy = d1[2];

                    var d = new Date().toLocaleString();
                    d1 = d.split('/');
                    var cm = d1[0];
                    var cd = d1[1];
                    var cy = d1[2];


                    if ((Math.abs(cm - gm) == 0 && Math.abs(cd - gd) <= 7) || data[k].isClosed == true) {
                        recevent[i1] = data[k];
                        i1++;

                    }
                    else {
                        upevent[i2] = data[k];
                        i2++;

                    }

                }
                console.log(Object.keys(recevent).length);
                for (var x = 0; x < Object.keys(recevent).length; x++) {
                    const recEventObj = {
                        id: x,
                    endTime: recevent[x].endTime,
                    eventDate: recevent[x].eventDate,
                    eventName: recevent[x].eventName,
                    isClosed: recevent[x].isClosed,
                    location: recevent[x].location,
                    skill: recevent[x].skill,
                    slots: [
                        {
                            endTime: recevent[x].endTime,
                            id: x,
                            noOfInterviewsEnrolled: [
                                {
                                    noOfInterviewsTaken: recevent[x].noOfInterviewsEnrolled,
                                    userid: recevent[x].userid
                                }
                            ],
                            startTime: recevent[x].startTime

                        
                    }]
                    }
                    const joined = self.state.recentEventArray.concat(recEventObj);

                    self.setState({
                        recentEventArray: (joined)
                    });

                }
                for (var x = 0; x < Object.keys(upevent).length; x++) {
                    const upEventObj = {
                        id: x,
                    endTime:   upevent[x].endTime,
                    eventDate: upevent[x].eventDate,
                    eventName: upevent[x].eventName,
                    isClosed:  upevent[x].isClosed,
                    location:  upevent[x].location,
                    skill:     upevent[x].skill,
                    slots: [
                        {
                            endTime: upevent[x].endTime,
                            id: x,
                            noOfInterviewsEnrolled: [
                                {
                                    noOfInterviewsTaken: upevent[x].noOfInterviewsEnrolled,
                                    userid: upevent[x].userid
                                }
                            ],
                            startTime: upevent[x].startTime

                        
                    }]
                    }
                    const joined = self.state.recentEventArray.concat(upEventObj);

                    self.setState({
                        recentEventArray: (joined)
                    });

                }
                console.log(self.state.recentEventArray);
            }
            )

        console.log(this.state.recentEventArray);
    }
        render() {

            return (
                <div>
                {this.state.recentEventArray[0].eventName};
                    <nav id="ID_head_nav" class="navbar navbar-inverse">
                        <div class="container-fluid">
                            <div class="navbar-header">
                                <span id="ID_topic">Islot </span>
                            </div>
                            <span id="ID_main_head">Interviewer Dashboard</span>
    
                            <div class="dropdown" id="ID_settings_page">
                                <a  class="dropdown-toggle" type="button" data-toggle="dropdown"><i id="ID_settings" class="fas fa-cogs"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a id="ID_settings_name" href="#">Profile settings</a></li>
                                    <li><a id="ID_settings_name" href="#">Location Management</a></li>
                                    <li><a id="ID_settings_name" href="#">Skill Management</a></li>
                                </ul>
                            </div>
                            <button id="ID_logout"class="btn btn-danger" onClick={this.signOut}><Link to="/">Logout</Link></button>
    
                        </div>
    
    
                    </nav>
                    <div  class="row">
                        <div id="ID_box_container"class="col-lg-9 line">
                            <h3 id="ID_rec">Recent Events </h3>
                            <div class="row">
                                {this.state.recentEventArray.map(function (data) {
                                  
                                  return (  <div id="ID_card" class="col-lg-3">
                                        <h3 id="ID_card_heading">{data.eventName}</h3>
                                        <h4 id="ID_card_date">{data.eventDate}</h4>
                                        <h4 id="ID_card_start_time">Start Time: <span id="ID_st">{data.startTime}</span></h4>
                                        <h4 id="ID_card_stop_time">End Time: <span id="ID_et">{data.endTime}</span></h4>
                                        <button id="ID_view_data" type="button" class="btn btn-lg btn-success"><Link to="/eventDetail">Click</Link></button>
                                    </div>)
                                }) }
    
                            </div>
                             <div  class="row">
                            <div id="ID_box_container"class="col-lg-9 line">
                            <h3 id="ID_rec">Upcoming Events </h3>
                            <div class="row">
                                {this.state.upcomingEventArray.map(function (data) {
                                  
                                  return (  <div id="ID_card" class="col-lg-3">
                                        <h3 id="ID_card_heading">{data.eventName}</h3>
                                        <h4 id="ID_card_date">{data.eventDate}</h4>
                                        <h4 id="ID_card_start_time">Start Time: <span id="ID_st">{data.startTime}</span></h4>
                                        <h4 id="ID_card_stop_time">End Time: <span id="ID_et">{data.endTime}</span></h4>
                                        <button id="ID_view_data" type="button" class="btn btn-lg btn-success"><Link to="/eventDetail">Click</Link></button>
                                    </div>)
                                }) }
    
                            </div>
                        </div>
                        </div>
                        <div class="line">
                            <div id="ID_points" class="col-lg-6">
                                <h2 id="ID_points_head"><i class="fas fa-certificate"></i> Points so far...</h2>
                                <div id="ID_tt_tm">
                                    <span id="ID_tt">Total</span>
                                    <span id="ID_tm">This Month</span>
                                </div>
    
                                <div id="ID_tt_tm_v">
                                    <span id="ID_tt_v">193</span>
                                    <span id="ID_tm_v">26</span>
                                </div>
                            </div>
                        </div>
                    </div>
    
    
    
    
    
                    <div id ="ID_box_container">
                        <h3 id="ID_rec">up event<div> {this.state.eventDate}</div></h3>
                        <div class="row">
                            <div id="ID_card_U" class="col-lg-4">
                                <h3 id="ID_card_U_heading">Angular 4</h3>
                                <h4 id="ID_card_U_date">25-01-1997</h4>
                                <h4 id="ID_card_U_start_time">Start Time: <span id="ID_sst">10: 00 AM</span></h4>
                                <h4 id="ID_card_U_stop_time">End Time: <span id="ID_eet">1: 00PM</span></h4>
                                <button id="ID_view_U_data" type="button" class="btn btn-lg btn-warning"><Link to="/eventDetail">Click</Link></button>
                            </div>
                        </div>
                    </div>
    
    
                </div>
                </div>
            );
    }
}