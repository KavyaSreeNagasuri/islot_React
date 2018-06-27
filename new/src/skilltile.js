import React, { Component } from 'react';
 import './skills.css';
class SkillTile extends Component {
    render() {
        return (
            <div className="col-xs-4" id="grid1" >
                <div className="skill_box"> 
                     <button className="glyphicon glyphicon-trash g1"></button>                     
                    <p className="skill_name">{this.props.sInfo.skill}</p>
                </div>
            </div>
        );
    }
}

export default SkillTile;
