import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class EventTile extends Component {
    render() {
        return (
                <div id="ID_card" class="col-lg-3 box">
                    <h3 id="ID_card_heading">{this.props.eInfo.eventName}</h3>
                    <h4 id="ID_card_date">{this.props.eInfo.eventDate}</h4>
                    <h4 id="ID_card_start_time">Start Time: <span id="ID_st">{this.props.eInfo.startTime}</span></h4>
                    <h4 id="ID_card_stop_time">End Time: <span id="ID_et">{this.props.eInfo.endTime}</span></h4>
                    <button id="ID_view_data"  type="button" class="btn btn-lg btn-success"><Link to="/eventDetail">click</Link></button>
                </div>
        );
    }
}

export default EventTile;