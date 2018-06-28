import React, { Component } from 'react';
import './drive_reg.css';
import NavAdmin from '../navbaradmin/navbaradmin';
import {Link} from 'react-router-dom';

class DriveReg extends Component {
    constructor(){
        super();
        this.state={
            fields:{},
            errors:{},
            pathlink:'/drive'
        }
        this.change=this.change.bind(this);
        this.checkForErrors=this.checkForErrors.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.clear_fun=this.clear_fun.bind(this);  
              
    };
    clear_fun(){
        this.setState({
            fields:{},
            errors:{}
        })
        this.inputTitle1.value = "";
        this.inputTitle2.value = "";
        this.inputTitle3.value = "";
        this.inputTitle4.value = ""; 
        this.inputTitle5.value = "";
        this.inputTitle6.value = "";                                        
    }
    change(e){
        // this.props.onChange({[e.target.name]:e.target.value});
        let fields=this.state.fields;
        let field=e.target.name;
        let err={};        
        if(field==="skills"||field=="locations"){
            var options = e.target.options;
            var value = [];
            for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    value.push(options[i].value);
                }
            }
            fields[field]=value;
        }
        else{
            fields[field]=e.target.value;
        }
        this.setState({
            fields:fields
        });
        switch(field){
            case 'ename':   if(typeof fields["ename"]!== "undefined"){
                                if(fields["ename"].length<4){
                                    // isError=true;
                                    err["enameError"]="*Name should be atleast 4 characters long";
                                }
                            };
                            break;
        }
        if(Object.keys(err).length === 0)
            this.setState({isError:false})
        else
            this.setState({isError:true})
        // console.log(this.state.isError);
        this.setState({errors:err});
        const er=this.checkForErrors();
        if(!er && Object.keys(this.state.errors).length === 0){
            this.setState({
                pathlink:'/loc'
            })
        }

    };
    checkForErrors(){
        let fields=this.state.fields;
        let errors={};
        let isError=false;
        //Name
        if(!fields["ename"]){            
            isError=true;
            errors["enameError"]="*Name should not be empty";
            console.log(errors);            
        }
        //Date
        if(!fields["date"]){
            isError=true;
            errors["dateError"]="*Please Enter the date";
        }
        //StartTime
        if(!fields["stime"]){
            isError=true;
            errors["stimeError"]="*Enter Start Time";
        }
        //EndTime
        if(!fields["etime"]){            
            isError=true;
            errors["etimeError"]="*Enter End Time";
        }
        if(Object.keys(errors).length === 0)
            this.setState({isError:false})
        else
            this.setState({isError:true})
        this.setState({errors:errors});    
        return isError; 
    }
    onSubmit(e) {
        e.preventDefault();
        const err=this.checkForErrors();
        if(!err && Object.keys(this.state.errors).length === 0){
            // alert("Form Submitted");
            fetch('https://pythonreact-f0b4d.firebaseio.com/event.json', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "endTime": this.state.fields["etime"],
                    "eventDate": this.state.fields["date"],
                    "eventName": this.state.fields["ename"],
                    "id": "05",
                    "isClosed": "false",
                    "location":this.state.fields["locations"],
                    "skill": this.state.fields["skills"],
                    "starttime":this.state.fields["stime"]
                })  
            })
            // fetch('https://pythonreact-f7420.firebaseio.com/event.json', {
            //     method: 'POST',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         "endTime": this.state.fields["etime"],
            //         "eventDate": this.state.fields["date"],
            //         "eventName": this.state.fields["ename"],
            //         "id": "05",
            //         "isClosed": "false",
            //         "location":this.state.fields["locations"],
            //         "skill": this.state.fields["skills"],
            //         "starttime":this.state.fields["stime"],
                    
            //         "slots": [
            //             {
            //                 "endTime": "10.00am",
            //                 "id": "11",
            //                 "noOfInterviewsEnrolled": [
            //                     {
            //                         "noOfInterviewsTaken": "15",
            //                         "userid": "1"
            //                     }
            //                 ],
            //                 "startTime": "9.00am"
            //             },
            //             {
            //                 "endTime": "11.00am",
            //                 "id": "12",
            //                 "noOfInterviewsEnrolled": [
            //                     {
            //                         "noOfInterviewsTaken": "10",
            //                         "userid": "2"
            //                     }
            //                 ],
            //                 "startTime": "10.00am"
            //             },
            //             {
            //                 "endTime": "12.00am",
            //                 "id": "13",
            //                 "noOfInterviewsEnrolled": [
            //                     {
            //                         "noOfInterviewsTaken": "13",
            //                         "userid": "3"
            //                     }
            //                 ],
            //                 "startTime": "11.00am"
            //             },
            //             {
            //                 "endTime": "1.00pm",
            //                 "id": "14",
            //                 "noOfInterviewsEnrolled": [
            //                     {
            //                         "noOfInterviewsTaken": "7",
            //                         "userid": "4"
            //                     }
            //                 ],
            //                 "startTime": "12.00pm"
            //             }
            //         ]
            //     })  
            // })
            
            this.clear_fun();
        }
        else{
            alert("Form has errors");
        }
    }
    render() {
        return (
            <div className="container1">
                <span><NavAdmin /></span>
                <div className="heading">
                    <h3><i>Drive Registration</i></h3>
                </div>
                <div className="form-group">
                    <div className="row">
                        <label className="col-sm-3">Name</label>
                        <input  type="text" name="ename"  ref={el => this.inputTitle1 = el} value={this.state.fields["ename"]} onChange={this.change} className="form-control"/>
                        <span class="size" style={{color: "red"}}>{this.state.errors["enameError"]}</span>
                    </div>
                    <div className="row">
                        <label className="col-sm-3">Date</label>
                        <input type="date" name="date"  ref={el => this.inputTitle2 = el} value={this.state.fields["date"]} onChange={this.change} className="form-control"/>
                        <span class="size" style={{color: "red"}}>{this.state.errors["dateError"]}</span>
                    </div>
                    <div className="row">
                        <label className="col-sm-3">Start Time</label>
                        <input type="time" name="stime"  ref={el => this.inputTitle3 = el} value={this.state.fields["stime"]} onChange={this.change} className="form-control"/>
                        <span class="size" style={{color: "red"}}>{this.state.errors["stimeError"]}</span>
                    </div>
                    <div className="row">
                        <label className="col-sm-3">End Time</label>
                        <input type="time" name="etime"  ref={el => this.inputTitle4 = el} value={this.state.fields["etime"]} onChange={this.change} className="form-control"/>
                        <span class="size" style={{color: "red"}}>{this.state.errors["etimeError"]}</span>
                    </div>
                </div>
                <div className="row col-sm-12 sel">
                    <div className="col-sm-6" id="s1">
                        <label className="l1 col-sm-2">Locations</label>
                            <select name="locations" className="col-sm-3"  onChange={this.change} ref={el => this.inputTitle5 = el} multiple size="5" className="select_x">
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Pune">Pune</option>
                                <option value="Bangalore">Bangalore</option>
                        </select>
                    </div>
                    <div className="col-sm-5" id="s2">
                        <label className="l1 col-sm-2">Skills</label>                    
                            <select name="skills" className="col-sm-4"  onChange={this.change} ref={el => this.inputTitle6 = el} multiple size="5">
                                <option value="angular">Angular</option>
                                <option value="css">CSS</option>
                                <option value="html">HTML</option>
                                <option value="javascript">Javascript</option>
                                <option value="react">React</option>
                            </select>
                    </div>
                </div>
                <div className="buttons">
                    <button className="btn btn-default bt1" onClick={this.clear_fun}>Reset</button>
                    <button className="btn btn-default bt2" onClick={this.onSubmit.bind(this)}><Link to={`${this.state.pathlink}`}>Create Event</Link></button>
                </div>
            </div>
        );
    }
}

export default DriveReg;
