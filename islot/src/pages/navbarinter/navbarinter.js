import React, { Component } from 'react';
import './navbarinter.css';
import {Link} from 'react-router-dom';

class NavInter extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          show: false
        }
        this.doSomething = this.doSomething.bind(this);
        this.toggleShow = this.toggleShow.bind(this);
        this.hide = this.hide.bind(this);
    }

    doSomething(e){
        e.preventDefault();
        console.log(e.target.innerHTML);
    }

    toggleShow(){
        console.log("Hello");
        this.setState({
            show: (!this.state.show)
        });
       console.log(this.state.show) ;
    }

    hide(e){
        if(e && e.relatedTarget){
            e.relatedTarget.click();
        }
        this.setState({show: false});
    }
    render() {
        return (
            <div>
                <div>
                    <div className="left">
                         <span className="a">islot</span>
                        
                         <button className="dropdown glyphicon glyphicon-option-vertical place dropdown-toggle" type="button"
                            onClick={this.toggleShow} onBlur={this.hide}></button>
                        {
                            this.state.show &&
                            (
                                <div className="list1">
                                    <ul className="dropdown-menu" style={{display: 'inline'}}>
                                        <li><Link to="/pwd">Change Password</Link></li>
                                        <li><Link to="/update">Update Profile</Link></li>
                                        <li><Link to="/logout">Logout</Link></li>
                                    </ul>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default NavInter;
