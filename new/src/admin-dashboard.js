import React, { Component } from 'react';
// import '../App';
import "./admin-dashboard.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
export default class AdminDashBoard extends Component {
    render() {
        return (
            <div class="main-container">
            
                    {/* <button class="glyphicon glyphicon-unchecked">
                        <div class="title"> Angular<br />WalkIn</div>
                    </button>
                    <button class="glyphicon glyphicon-unchecked">
                        <div class="title"> Java<br />WalkIn</div>
                    </button>
                </div>
                
                <Link to="/drive"><button class="glyphicon glyphicon-plus-sign" id="plus"></button></Link>
                
                
                <div class="upcoming">
                    <h1>
                        Upcoming Events
                    </h1>
                    <button class="glyphicon glyphicon-unchecked">
                        <div class="title"> .Net<br />WalkIn</div>
                    </button>
                    <button class="glyphicon glyphicon-unchecked">
                        <div class="title"> Informatica<br />WalkIn</div>
                    </button>
                </div>


            </div> */}
             <div  class="row">
                        <div id="ID_box_container"class="col-lg-9 line">
                            <h3 id="ID_rec">Recent Events </h3>
                            <div class="row1">
                                {/* {this.state.recentEventArray.map(function (data) { */}
                                  
                                  
                                       <div id="ID_card" class="col-lg-3 box">
                                        <h3 id="ID_card_heading">Angular</h3>
                                        <h4 id="ID_card_date">05-07-2018</h4>
                                         <h4 id="ID_card_start_time">Start Time: <span id="ID_st">9:00AM</span></h4> 
                                         <h4 id="ID_card_stop_time">End Time: <span id="ID_et">4:00PM</span></h4> 
                                        <button id="ID_view_data" type="button" class="btn btn-lg btn-success"><Link to="/eventDetail">Click</Link></button>
                                    </div>
                                
                                 
                                 </div>
                                 </div>
                                 </div>

    
            
                             <div  class="row">
                            <div id="ID_box_container"class="col-lg-9 line">
                            <h3 id="ID_rec1">Upcoming Events </h3>
                            <div class="rows">
                                {/* {this.state.upcomingEventArray.map(function (data) { */}
                                  
                                   <div id="ID_card" class="col-lg-3 box">
                                        <h3 id="ID_card_heading">React</h3>
                                        <h4 id="ID_card_date">05-08-2017</h4>
                                        <h4 id="ID_card_start_time">Start Time: <span id="ID_st">9:00AM</span></h4> 
                                        <h4 id="ID_card_stop_time">End Time: <span id="ID_et">4:00PM</span></h4> 
                                        <button id="ID_view_data" type="button" class="btn btn-lg btn-success"><Link to="/eventDetail">Click</Link></button>
                                    </div>
                            
    
                            </div>
                        </div>
                        </div>
                        </div>
                   
        );
    }
}
