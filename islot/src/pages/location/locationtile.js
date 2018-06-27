import React, { Component } from 'react';

class LocationTile extends Component {
    constructor(props){
        super(props);
        this.deleteLocation=this.deleteLocation.bind(this);
    }
    deleteLocation(){
        this.props.deleteloc(this.props.lInfo.location);
    }
    render() {
        return (
            <div className="col-xs-4" id="grid1" >
                <div className="skill_box"> 
                    <button className="glyphicon glyphicon-trash g1"  onClick={this.deleteLocation}></button>                    
                    <p className="skill_name">{this.props.lInfo.location}</p>
                </div>
            </div>
        );
    }
}

export default LocationTile;