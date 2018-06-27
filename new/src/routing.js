import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Routing extends Component {
    render() {
        return (
            <div>                 
                <ul>                        
                    <li><Link to="/login">Sign-in</Link></li>                    
                    <li><Link to="/inter_reg">Sign-up as Interviewer</Link></li>
                    <li><Link to="/admin_reg">Sign In as Admin</Link></li>
                </ul>                        
            </div>
        );
    }
}

export default Routing;