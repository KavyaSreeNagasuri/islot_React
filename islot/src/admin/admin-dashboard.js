import React, { Component } from 'react';
import '../App';
import "./admin-dashboard.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
export default class AdminDashBoard extends Component {
    render() {
        return (
            <div class="main-container">
                <div class="recent">
                    <h1>
                        Recent Events
                    </h1>
                    <button class="glyphicon glyphicon-unchecked">
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


            </div>
        );
    }
}