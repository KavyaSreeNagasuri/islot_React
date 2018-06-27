import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Common from './common';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Header from './Header/Header';
import Content from './Content/Content';
 import Login from './login';
 import InterViewer from './inter_reg';
 import Admin from './admin_reg';
 import Password from './pwd';
 import Update from './update';
 import Skills from './skills';
 import DriveReg from './drive_reg';
  import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
 import InterviewerDashBoard from './interviewer-dashboard';
 import AdminDashBoard from './admin-dashboard';


class App extends Component {
  render() {
    return (
      <div className="App">
         <Router> 
          <Switch> 
        <Route path="/" exact component={Content}/>             
        <Route path="/login" exact component={Login}/> 
        <Route path="/inter_reg" exact component={InterViewer}/> 
         <Route path="/admin_reg" exact component={Admin}/> 
         <Route path="/drive_reg" exact component={DriveReg}/>
         <Route path="/pwd" exact component={Password}/>
         <Route path="/update" exact component={Update}/>
         <Route path="/skills" exact component={Skills}/>
         <Route path="/interviewer-dashboard" exact component={InterviewerDashBoard}/>
         <Route path="/admin-dashboard" exact component={AdminDashBoard}/>
         </Switch> 
         </Router>  
      </div>
    );
  }
}

export default App;
