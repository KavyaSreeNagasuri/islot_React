import React, { Component } from 'react';
import './drive_reg.css';
import Nav from './navbar';

class DriveReg extends Component {
    constructor(){
        super();
        this.state={
            fields:{},
            errors:{}
        }
        this.change=this.change.bind(this);
        this.checkForErrors=this.checkForErrors.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.clear_fun=this.clear_fun.bind(this);        
    };
    clear_fun(e){
        e.preventDefault();
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
        let fields1=this.state.fields;
        let field=e.target.name;
        if(field==="skills"||field=="locations"){
            var options = e.target.options;
            var value = [];
            for (var i = 0, l = options.length; i < l; i++) {
                if (options[i].selected) {
                    value.push(options[i].value);
                }
            }
            fields1[field]=value;
        }
        else{
            fields1[field]=e.target.value;
        }
        this.setState({
            fields:fields1
        });
    };
    checkForErrors(){
        let fields=this.state.fields;
        let err={};
        let isError=false;
        //Name
        if(!fields["ename"]){            
            isError=true;
            err["enameError"]="Name should not be empty";
            console.log(err);            
        }
        //Date
        if(!fields["date"]){
            isError=true;
            err["dateError"]="Please Enter the date";
        }
        //StartTime
        if(!fields["stime"]){
            isError=true;
            err["stimeError"]="Enter Start Time";
        }
        //EndTime
        if(!fields["etime"]){            
            isError=true;
            err["etimeError"]="Enter End Time";
        }
        this.setState({errors:err});
        return isError;
    }
    onSubmit= (e) =>{
        e.preventDefault();
        const err=this.checkForErrors();
        if(!err){
            alert("Form Submitted");
            fetch('https://pythonreact-f7420.firebaseio.com/event.json', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // Name:this.state.fields["iname"],
                    // Email:this.state.fields["email"],
                    // Pwd:this.state.fields["pwd"],
                    // // Mobile:this.state.fields["mobile"],
                    // Skills:this.state.fields["skills"]
                    "endTime": this.state.fields["etime"],
                    "eventDate": this.state.fields["date"],
                    "eventName": this.state.fields["ename"],
                    "id": "05",
                    "isClosed": "false",
                    "location":this.state.fields["locations"],
                    "skill": this.state.fields["skills"],
                    "starttime":this.state.fields["stime"],
                    
                    // "slots": [
                    //     {
                    //         "endTime": "10.00am",
                    //         "id": "11",
                    //         "noOfInterviewsEnrolled": [
                    //             {
                    //                 "noOfInterviewsTaken": "15",
                    //                 "userid": "1"
                    //             }
                    //         ],
                    //         "startTime": "9.00am"
                    //     },
                    //     {
                    //         "endTime": "11.00am",
                    //         "id": "12",
                    //         "noOfInterviewsEnrolled": [
                    //             {
                    //                 "noOfInterviewsTaken": "10",
                    //                 "userid": "2"
                    //             }
                    //         ],
                    //         "startTime": "10.00am"
                    //     },
                    //     {
                    //         "endTime": "12.00am",
                    //         "id": "13",
                    //         "noOfInterviewsEnrolled": [
                    //             {
                    //                 "noOfInterviewsTaken": "13",
                    //                 "userid": "3"
                    //             }
                    //         ],
                    //         "startTime": "11.00am"
                    //     },
                    //     {
                    //         "endTime": "1.00pm",
                    //         "id": "14",
                    //         "noOfInterviewsEnrolled": [
                    //             {
                    //                 "noOfInterviewsTaken": "7",
                    //                 "userid": "4"
                    //             }
                    //         ],
                    //         "startTime": "12.00pm"
                    //     }
                    // ]
                })  
            })
            this.setState({
                fields:{},
                errors:{},
            });
        }
        else{
            // alert("Form has errors");
        }
    }
    render() {
        return (
            <div className="container1">
                <span><Nav /></span>
                <div className="form-group">
                    <div className="heading">
                        <h3><i>Drive Registration</i></h3>
                    </div>
                    <div className="col-xs-12">
                        <label>Name</label>
                        <input  type="text" name="ename"  ref={el => this.inputTitle1 = el} value={this.state.fields["ename"]} onChange={this.change} className="form-control"/>
                        <span style={{color: "red"}}>{this.state.errors["enameError"]}</span>
                    </div>
                    <div className="col-xs-12">
                        <label>Date</label>
                        <input type="date" name="date"  ref={el => this.inputTitle2 = el} value={this.state.fields["date"]} onChange={this.change} className="form-control"/>
                        <span style={{color: "red"}}>{this.state.errors["dateError"]}</span>
                    </div>
                    <div className="col-xs-12">
                        <label>Start Time</label>
                        <input type="time" name="stime"  ref={el => this.inputTitle3 = el} value={this.state.fields["stime"]} onChange={this.change} className="form-control"/>
                        <span style={{color: "red"}}>{this.state.errors["stimeError"]}</span>
                    </div>
                    <div className="col-xs-12">
                        <label>End Time</label>
                        <input type="time" name="etime"  ref={el => this.inputTitle4 = el} value={this.state.fields["etime"]} onChange={this.change} className="form-control"/>
                        <span style={{color: "red"}}>{this.state.errors["etimeError"]}</span>
                    </div>
                </div>
                <div className="row col-xs-12">
                    <div className="col-xs-6" id="s1">
                        <label className="l1 col-xs-6">Locations</label>
                            <select name="locations" className="col-xs-6"  onChange={this.change} ref={el => this.inputTitle5 = el} multiple size="5" className="select_x">
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Pune">Pune</option>
                                <option value="Bangalore">Bangalore</option>
                        </select>
                    </div>
                    <div className="col-xs-5" id="s2">
                        <label className="l1 col-xs-6">Skills</label>                    
                            <select name="skills"className="col-xs-6"  onChange={this.change} ref={el => this.inputTitle6 = el} multiple size="5">
                                <option value="angular">Angular</option>
                                <option value="css">CSS</option>
                                <option value="html">HTML</option>
                                <option value="javascript">Javascript</option>
                                <option value="react">React</option>
                            </select>
                    </div>
                </div>
                <div className="col-xs-8 buttons">
                    <button className="btn btn-primary bt1" onClick={this.clear_fun}>Reset</button>
                    <button className="btn btn-primary bt2" onClick={this.onSubmit.bind(this)}>Create Event</button>
                </div>
            </div>
        );
    }
}

export default DriveReg;
