import React, { Component } from 'react';
import DriveReg from './pages/drivereg/drive_reg';
import Interviewer from './pages/interreg/inter_reg';
import Admin from './pages/adminreg/admin_reg';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Routing from './pages/routing';
import Login from './pages/login/login';
import Skills from './pages/skills/skills';
import Password from './pages/pwd/pwd';
import Locations from './pages/location/location';
import AdminDashBoard from './admin/admin-dashboard'; 
import InterviewerDashBoard from './interviewer/interviewer-dashboard'; 

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Switch>
                <Route path="/" exact component={Routing}/>
                <Route path="/login" exact component={Login}/>          
                <Route path="/drive" exact component={DriveReg}/>
                <Route path="/interviewer" exact component={Interviewer}/>
                <Route path="/admin" exact component={Admin}/>  
                <Route path="/skills" exact component={Skills}/> 
                <Route path="/pwd" exact component={Password}/>    
                <Route path="/admindashboard" exact component={AdminDashBoard}/>                                                                                   
                <Route path="/interviewerdashboard" exact component={InterviewerDashBoard}/>    
                <Route path="/loc" exact component={Locations}/>
                                                                                               
            </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;