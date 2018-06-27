import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./admin-event-detail.css";
// import 'react-tabs/style/react-tabs.css';
export default class AdminEventDetail extends Component {
    render() {
        return (
            <div>
                <Tabs>
                    <TabList>
                        <Tab><b>View</b></Tab>
                        <Tab><b>Update</b></Tab>
                    </TabList>

                    <TabPanel>
                        <div class="view">
                            <div class="row">
                                <div class="timings">
                                    <span>
                                        <p><b>9AM to 11AM</b></p>
                                    </span>
                                </div>
                                <div class="profile">
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
                                <div class="profile">
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
                                <div class="profile">
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
                                <div class="profile">
                                </div>
                                <div class="personCount">
                                    <input type="text" value="20" />
                                </div>

                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div class="update">
                            <div class="closeEvent">

                                <div class="nameList">
                                    <div class="list">
                                        <span>
                                            <p><b><b>Prakash</b></b></p>
                                        </span>
                                        <div class="count">
                                            <input type="text" value="20" />
                                        </div>
                                        <div class="approve">
                                            <button onclick=""><b>Approve</b></button>
                                        </div>
                                    </div>

                                    <div class="list">
                                        <span>
                                            <p><b><b>Prakash</b></b></p>
                                        </span>
                                        <div class="count">
                                            <input type="text" value="20" />
                                        </div>
                                        <div class="approve">
                                            <button onclick=""><b>Approve</b></button>
                                        </div>
                                    </div>
                                    <div class="list">
                                        <span>
                                            <p><b><b>Prakash</b></b></p>
                                        </span>
                                        <div class="count">
                                            <input type="text" value="20" />
                                        </div>
                                        <div class="approve">
                                            <button onclick=""><b>Approve</b></button>
                                        </div>
                                    </div>
                                    <div>
                                    </div>

                                </div>
                                <div class="close">
                                    <button onclick=""><b>Close</b></button>
                                </div>
                            </div>

                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        );
    }
}