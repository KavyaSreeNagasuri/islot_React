import React, { Component } from 'react';
import Header from "./header/header";
import AdminSignIn from "../pages/sign-in/adminsignin";
import InterviewerSignIn from "./sign-in/interviewersignin";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Content from '../content/content';
export default class LandingPage extends Component{
    render(){
        return (
            <Router>
                <Header />
                <div>
                        <Route exact strict path="/" component={Content} />
                        <Route  path="/adminsignin" component={AdminSignIn} />
                        <Route  path="/interviewersignin" component={InterviewerSignIn} />
                </div>
            </Router>
        );
    }
}