import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Routing extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to iSlot WireFrames</h1>                    
                <ul>                        
                    <li><Link to="/admindashboard">Admin Dashboard</Link></li>
                    <li><Link to="/interviewerdashboard">Interviewer dashboard</Link></li>
                    <li><Link to="/login">Login</Link></li>                    
                    <li><Link to="/interviewer">Sign In as Interviewer</Link></li>
                    <li><Link to="/admin">Sign In as Admin</Link></li>
                    <li><Link to="/interdash">Interviewer Dashboard</Link></li>    
                    <li><Link to="/event">Enrollment</Link></li>                                                        
                </ul>                        
            </div>
        );
    }
}

export default Routing;