import React, { Component } from 'react';
import './admin_reg.css';
import Nav from '../navbar/navbar';

class Admin extends Component {
    constructor(){
        super();
        this.state={
            fields:{},
            errors:{},
            isError:true            
        }
        this.change=this.change.bind(this);
        this.checkForErrors=this.checkForErrors.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.clear_fun=this.clear_fun.bind(this);
        // this.selectchange=this.selectchange.bind(this);
    };
    clear_fun(e){
        e.preventDefault();
        this.setState({
            fields:{},
            errors:{},
            isError:true
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
        if(field==="skills"){
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
        // this.checkForErrors(e);
        switch(field){
            case 'aname':   if(typeof fields["aname"]!== "undefined"){
                                if(fields["aname"].length<4){
                                    // isError=true;
                                    err["anameError"]="*Name should be atleast 4 characters long";
                                }
                            };
                            break;
            case 'email' : if(typeof fields["email"]!=="undefined"){
                                var emailfield=fields["email"].match(/^\S+@\S+\.\S+$/i);
                                if(!emailfield){
                                    // isError=true;
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
                            break;
            case 'pwd'  :   if(typeof fields["pwd"]!=="undefined"){
                                var len=(fields["pwd"]).length;
                                if(len<4 || len >12){
                                    // isError=true;
                                    err["pwdError"]="*Please Enter a password between 4 and 12 characters"
                                }
                                else{
                                    var pwdfield=fields["pwd"].match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/i);
                                    if(!pwdfield){
                                        // isError=true;
                                        err["pwdError"]="*Should contain atleast 1 Capital, 1 small letter & 1 digit";
                                    }
                                }
                            };
                            break;
            case 'cpwd' :   if(typeof fields["cpwd"]!=="undefined"){
                                if(fields["pwd"]!==fields["cpwd"]){
                                    err["cpwdError"]="*Passwords didn't match";             
                                }
                            };
                            break;
            case 'mobile':  if(typeof fields["mobile"]!== "undefined"){
                                var length=fields["mobile"].length;
                                if(!fields["mobile"].match((/^[1-9][0-9]/))){
                                    // isError=true;
                                    err["mobileError"]="*Number shouldn't contain letters";
                                }
                                else if(length<10||length>10){
                                    // isError=true;
                                    err["mobileError"]="*Number should have 10 digits length";
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
    };
    checkForErrors(e){
        let fields=this.state.fields;
        let err={};
        let isError=false;
        //Name
        if(!fields["aname"]){            
            isError=true;
            err["anameError"]="*Name should not be empty";
            console.log(err);            
        }
        if(!fields["email"]){
            isError=true;
            err["emailError"]="*Enter EmailId";
        }
        if(!fields["pwd"]){
            isError=true;
            err["pwdError"]="*Enter Password";
        }
        if(!fields["cpwd"]){
            isError=true;
            err["cpwdError"]="*Please Enter the password again";
        }
        if(!fields["mobile"]){            
            isError=true;
            err["mobileError"]="*Please Enter mobile number";
            console.log(err);            
        }
        console.log(err);        
        if(Object.keys(err).length === 0)
            this.setState({isError:false})
        else
            this.setState({isError:true})
        this.setState({errors:err});    
        return isError;            
    }
    onSubmit= (e) =>{
        e.preventDefault();
        const err=this.checkForErrors();
        console.log(this.state.isError);
        console.log(this.state.errors);        
        if(!err && Object.keys(this.state.errors).length === 0){
            alert("Form Submitted");
            fetch('https://pythonreact-f0b4d.firebaseio.com/users.json', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
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
            fetch("https://pythonreact-f0b4d.firebaseio.com/users.json").then(res => res.json()).
                then(data => console.log(data));
            this.setState({
                fields:{},
                errors:{},
            });
        }
        else{
            alert("Form has errors");
        }
    }
    render() {
        return (
        <div className="container1">
            <span><Nav /></span>
            <div className="heading">
                <h3><i>Admin Registration</i></h3>
            </div>
            <div className="form-group">
                <div className="row">
                    <label className="col-sm-3">Name</label>
                    <input  type="text" name="aname" ref={el => this.inputTitle1 = el} value={this.state.fields["aname"]} onChange={this.change} className="form-control"/>
                    <span className="size" style={{color: "red"}}>{this.state.errors["anameError"]}</span>
                </div>
                <div className="row">
                    <label className="col-sm-3">Email</label>
                    <input type="email" ref={el => this.inputTitle2 = el} value={this.state.fields["email"]} onChange={this.change} name="email" className="form-control"/>
                    <span className="size" style={{color: "red"}}>{this.state.errors["emailError"]}</span>                    
                </div>
                <div className="row">
                    <label className="col-sm-3">Password</label>
                    <input type="password" ref={el => this.inputTitle3 = el} value={this.state.fields["pwd"]} onChange={this.change} name="pwd" className="form-control"/>
                    <span className="size" style={{color: "red"}}>{this.state.errors["pwdError"]}</span>                                        
                </div>
                <div className="row">
                    <label className="col-sm-3">Confirm Password</label>
                    <input type="password" value={this.state.fields["cpwd"]} ref={el => this.inputTitle4 = el} onChange={this.change} name="cpwd" className="form-control"/>
                    <span className="size" style={{color: "red"}}>{this.state.errors["cpwdError"]}</span>                                        
                </div>
                <div className="row">
                    <label className="col-sm-3">Mobile Number</label>
                    <input type="text" ref={el => this.inputTitle4 = el} value={this.state.fields["mobile"]} onChange={this.change} name="mobile" className="form-control"/>
                    <span className="size" style={{color: "red"}}>{this.state.errors["mobileError"]}</span>                                        
                </div>
                <div className="col-sm-12" id="s1">
                    <label className="l1" ref={el => this.inputTitle5 = el}>Locations</label>
                        <select name="locations" onChange={this.change} multiple>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Chennai">Chennai</option>
                            <option value="Pune">Pune</option>
                            <option value="Bangalore">Bangalore</option>
                    </select>
                </div>
            </div>            
            <div className="col-xs-12 buttons">
                <button className="btn bg-primary bt1" onClick={this.clear_fun}>Clear</button>
                <button className="btn bg-primary bt2" onClick={this.onSubmit.bind(this)}>Register</button>
            </div>
        </div>
        );
    }
}

export default Admin;
