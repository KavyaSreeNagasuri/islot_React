import React, { Component } from 'react';
import './Content.css';
// import Login from '../login';
// import InterViewer from '../inter_reg';
// import Admin from '../admin_reg';
import Header from '../Header/Header';
 import {Link} from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <div>
            <Header/>
            
            <div className="main">
            <div className="grid-container">
            <ul>
            <div className="button1"> <button type="button" class="btn btn-default"><Link to="/login">Sign-in</Link></button><br/><br/></div>
            
            <div ><button type="button" class="button2 btn btn-default"><Link to="/inter_reg">Sign-up as Interviewer</Link></button>
            
            <button type="button" class="btn btn-default"><Link to="/admin_reg">Sign-up as Admin</Link></button></div>
    

        
    </ul>
</div>


            </div>
            </div>
        
        );
    }
}

export default Content;