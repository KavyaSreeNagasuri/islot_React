import React, { Component } from 'react';
import './drive_reg.css';
import {Link} from 'react-router-dom';
import Nav from './navbar';

class Admin extends Component {
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
    }
    change(e){
        // this.props.onChange({[e.target.name]:e.target.value});
        let fields1=this.state.fields;
        let field=e.target.name;
        if(field==="locations"){
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
        if(!fields["aname"]){            
            isError=true;
            err["anameError"]="Name should not be empty";
            console.log(err);            
        }
        if(typeof fields["aname"]!== "undefined"){
            if(fields["aname"].length<4){
                isError=true;
                err["anameError"]="Name should be atleast 4 characters long";
            }
        }
        //Email
        if(!fields["email"]){
            isError=true;
            err["emailError"]="Enter EmailId";
        }
        if(typeof fields["email"]!=="undefined"){
            var emailfield=fields["email"].match(/^\S+@\S+\.\S+$/i);
            if(!emailfield){
                isError=true;
                err["emailError"]="Enter Valid Email";
            }
            else{
                len=fields["email"].length;
                var s = fields["email"].substring(len-12,len);
                if(s!="@virtusa.com")
                {
                    err["emailError"]="Enter Valid Virtusa Email Id";
                }
            }
        }
        //Password
        if(!fields["pwd"]){
            isError=true;
            err["pwdError"]="Enter Password";
        }
        if(typeof fields["pwd"]!=="undefined"){
            var len=(fields["pwd"]).length;
            if(len<4 || len >12){
                isError=true;
                err["pwdError"]="Please Enter a password between 4 and 12 characters"
            }
            else{
                var pwdfield=fields["pwd"].match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/i);
                if(!pwdfield){
                    isError=true;
                    err["pwdError"]="Password should consist of at least one number, one lowercase and one uppercase letter";
                }
            }
        }
        //Confirm Password
        if(!fields["cpwd"]){
            isError=true;
            err["cpwdError"]="Please Enter the password again";
        }
        if(typeof fields["cpwd"]!=="undefined"){
            if(fields["pwd"]!==fields["cpwd"]){
                isError=true;
                err["cpwdError"]="Passwords didn't match";             
            }
        }
        //Mobile Number
        if(!fields["mobile"]){            
            isError=true;
            err["mobileError"]="Please Enter mobile number";
            console.log(err);            
        }
        if(typeof fields["mobile"]!== "undefined"){
            var length=fields["mobile"].length;
            if(length<12||length>12){
                isError=true;
                err["mobileError"]="Number should have 12 digits length";
            }
        }
        this.setState({errors:err});
        return isError;
    }
    onSubmit= (e) =>{
        e.preventDefault();
        const err=this.checkForErrors();
        if(!err){
            alert("Form Submitted");
            fetch('https://pythonreact-f0b4d.firebaseio.com/users.json', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // Name:this.state.fields["aname"],
                    // Email:this.state.fields["email"],
                    // Pwd:this.state.fields["pwd"],
                    // Mobile:this.state.fields["mobile"],
                    // Locations:this.state.fields["locations"]
                    "email": this.state.fields["email"],
                    "eventpoints": [
                    ],
                    "id": 5,
                    "location": this.state.fields["locations"],
                    "mobileno": this.state.fields["mobile"],
                    "name": this.state.fields["aname"],
                    "password": this.state.fields["pwd"],
                    "role": "admin"
                })
            })
            this.setState({
                fields:{},
                errors:{},
            });
        }
    }
    render() {
        return (
        <div className="container1">
            <span><Nav /></span>
            <div className="form-group">
                <div className="heading">
                    <h3><i>Admin Registration</i></h3>
                </div>
                <div className="row">
                    <label className="col-sm-3">Name</label>
                    <input  type="text" name="aname" ref={el => this.inputTitle1 = el} value={this.state.fields["aname"]} onChange={this.change} className="form-control"/>
                    <span style={{color: "red"}}>{this.state.errors["anameError"]}</span>
                </div>
                <div className="row">
                    <label className="col-sm-3">Email</label>
                    <input type="email" ref={el => this.inputTitle2 = el} value={this.state.fields["email"]} onChange={this.change} name="email" className="form-control"/>
                    <span style={{color: "red"}}>{this.state.errors["emailError"]}</span>                    
                </div>
                <div className="row">
                    <label className="col-sm-3">Password</label>
                    <input type="password" ref={el => this.inputTitle3 = el} value={this.state.fields["pwd"]} onChange={this.change} name="pwd" className="form-control"/>
                    <span style={{color: "red"}}>{this.state.errors["pwdError"]}</span>                                        
                </div>
                <div className="row">
                    <label className="col-sm-3">Confirm Password</label>
                    <input type="password" value={this.state.fields["cpwd"]} ref={el => this.inputTitle4 = el} onChange={this.change} name="cpwd" className="form-control"/>
                    <span style={{color: "red"}}>{this.state.errors["cpwdError"]}</span>                                        
                </div>
                <div className="row">
                    <label className="col-sm-3">Mobile Number</label>
                    <input type="text" ref={el => this.inputTitle4 = el} value={this.state.fields["mobile"]} onChange={this.change} name="mobile" className="form-control"/>
                    <span style={{color: "red"}}>{this.state.errors["mobileError"]}</span>                                        
                </div>
                <div className="col-xs-12" id="s1">
                    <label className="l1" ref={el => this.inputTitle5 = el}>Locations</label>
                        <select name="locations" onChange={this.change} multiple>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Pune">Pune</option>
                            <option value="Bangalore">Bangalore</option>
                    </select>
                </div>
            </div>            
            <div className="buttons">
                <button className="btn bg-primary bt1" onClick={this.clear_fun}>Clear</button>
                <button className="btn bg-primary bt2" onClick={this.onSubmit.bind(this)}><Link to="/admin-dashboard">Register</Link></button>
            </div>
        </div>
        );
    }
}

export default Admin;
