import React, { Component } from 'react';
import './interdash.css';
import {Link} from 'react-router-dom';
import EventTile from './event';
// import fire from '../Fire';
// import Interviewer_Event from "../Interviewer_Event/Interviewer_Event";
class InterviewerDashboard extends Component {
    constructor() {
        super();
        this.state = {
            recentEventArray: [
                {
                    startTime:"9:00am",
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
                    startTime:"10:00am",
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
        this.check = this.check.bind(this);
    }
    signOut() {
        // fire.auth().signOut();
        // console.log(this.state.recevent);
    }
    componentDidMount() {
        const self = this;
        var recevent = {};
        var upevent = {};
        var i1 = 0, i2 = 0;
        var event = {};
        fetch("https://python-4bb6b.firebaseio.com/event.json").then(res => res.json())
            .then(function (data) {
                ///  console.log(data);
                var keys = Object.keys(data);
                for (var i = 0; i < keys.length; i++) {
                    var  k = keys[i];
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
                    //  console.log(cd);


                    // if ((Math.abs(cm - gm) == 0 && ((cd -gd) <= 0)||((cd-gd) > -5))){
                        //recent events 
                        if(Math.abs(cm-gm)==0 &&  (gd-cd<-7  || gd-cd <=0))
                        {

                        recevent[i1] = data[k];
                        i1++;
                        console.log("recent");
                    }
                    else
                    {
                        //upcoming events
                        upevent[i2] = data[k];
                        i2++;
                        console.log("upcoming");

                    }

                }
                console.log(Object.keys(recevent).length);
                console.log(Object.keys(upevent).length);
                //console.log(recevent.size);
                for (var x = 0; x < Object.keys(recevent).length-5; x++) {
                    const recEventObj = {
                        id: x,
                    startTime: recevent[x].startTime,
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
                   startTime: upevent[x].startTime,    
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
                    const joined = self.state.upcomingEventArray.concat(upEventObj);
                    console.log(joined);

                    self.setState({
                        upcomingEventArray: (joined)
                    });

                }
                //console.log(self.state.recentEventArray);
                // this.check(recevent);
            }
            )





        //console.log(this.state.recentEventArray);
    }

    check(recent) {
        //console.log(recent);
    }
    
    
    render() {

        return (
            <div>
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
                        <div class="row1">
                            {this.state.recentEventArray.map(function (data) {
                              
                              return (  
                                <EventTile eInfo={data} />
                              )
                            }) }

                        </div>
                         <div  class="row">
                        <div id="ID_box_container"class="col-lg-9 line">
                        <h3 id="ID_rec1">Upcoming Events </h3>
                        <div class="rows">
                            {this.state.upcomingEventArray.map(function (data) {
                              return(
                                    <EventTile eInfo={data} />
                              )
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







            </div>
            </div>
        );
    }
}

export default InterviewerDashboard;
