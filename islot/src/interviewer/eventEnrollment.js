import React, { Component } from 'react';
import Switch from 'react-toggle-switch';
import "./eventEnrollment.css";
export default class EventEnrollment extends Component {
    constructor(props) {
        super(props);
        this.state = {
          switched: false
        }
      }
     
      toggleSwitch = () => {
        this.setState(prevState => {
          return {
            switched: !prevState.switched
          }
        })
      }

    render() {
        
        return (
            <div class="view">
                <div class="row">
                    <div class="timings">
                        <span>
                            <p><b>9AM to 11AM</b></p>
                        </span>
                    </div>
                    <div class="personCount">
                        <input type="text" value="20" />
                    </div>
                    <div class="toggle">
                    <Switch onClick={this.toggleSwitch} on={this.state.switched}>
              <i class="some-icon"/>
            </Switch>

                    </div>
                </div>
                <div class="row">
                    <div class="timings">
                        <span>
                            <p><b>9AM to 11AM</b></p>
                        </span>
                    </div>

                    <div class="personCount">
                        <input type="text" value="20" />
                    </div>
                </div>
                <div class="row">
                    <div class="timings">
                        <span>
                            <p><b><b>9AM to 11AM</b></b></p>
                        </span>
                    </div>

                    <div class="personCount">
                        <input type="text" value="20" />
                    </div>
                </div>
                <div class="row">
                    <div class="timings">
                        <span>
                            <p><b>9AM to 11AM</b></p>
                        </span>
                    </div>
                    <div class="personCount">
                        <input type="text" value="20" />
                    </div>

                </div>
            </div>
        );
    }
}