import React, { Component } from 'react';

class SkillTile extends Component {
    constructor(props){
        super(props);
        this.deleteSkill=this.deleteSkill.bind(this);
    }
    deleteSkill(e){
        this.props.deleteSk(this.props.sInfo.id);
    }
    render() {
        return (
            <div className="col-xs-4" id="grid1" >
                <div className="skill_box"> 
                    <button className="glyphicon glyphicon-trash g1" onClick={this.deleteSkill}></button>                    
                    <p className="skill_name">{this.props.sInfo.skill}</p>
                </div>
            </div>
        );
    }
}

export default SkillTile;