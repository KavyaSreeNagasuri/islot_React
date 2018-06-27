import React, { Component } from 'react';
import './login.css';
import {Link} from 'react-router-dom';
import Nav from './navbar';

class Login extends Component {
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
    }
    change(e){
        // this.props.onChange({[e.target.name]:e.target.value});
        let fields=this.state.fields;
        let field=e.target.name;
        let err={};        
        this.setState({
            fields:fields
        });
        switch(field){
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
        }
        if(Object.keys(err).length === 0)
            this.setState({isError:false})
        else
            this.setState({isError:true})
        // console.log(this.state.isError);
        this.setState({errors:err});
    };
    checkForErrors(){
        let fields=this.state.fields;
        let err={};
        let isError=false;
        if(!fields["email"]){
            isError=true;
            err["emailError"]="*Enter EmailId";
        }
        if(!fields["pwd"]){
            isError=true;
            err["pwdError"]="*Enter Password";
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
        if(!err && Object.keys(this.state.errors).length === 0){
            this.setState({
                fields:{},
                errors:{},
            });
            alert("Form Submitted");
            this.clear_fun();
        }
        else{
            alert("Form has errors");
        }
    }
    render() {
        return (
            <div className="container2">
                <span><Nav /></span>
                <div className="heading">
                    <h3><i>Sign In</i></h3>
                </div>
                <div className="p1">
                    New User?<Link to="/">Click Here to Sign In</Link>
                </div>
                <div className="form-group">
                    <br/><br/>
                    <div className="row">
                        <label className="col-sm-3">Email</label>
                        <input type="email" value={this.state.fields["email"]} ref={el => this.inputTitle1 = el} onChange={this.change} name="email" className="form-control"/>
                        <span class="size" style={{color: "red"}}>{this.state.errors["emailError"]}</span>                    
                    </div>
                    <div className="row">
                        <label className="col-sm-3">Password</label>
                        <input type="password" value={this.state.fields["pwd"]} ref={el => this.inputTitle2 = el} onChange={this.change} name="pwd" className="form-control"/>
                        <span class="size" style={{color: "red"}}>{this.state.errors["pwdError"]}</span>                                        
                    </div>
                </div>
                <div className="col-xs-12 buttons">
                        <button className="btn bg-primary bt1" onClick={this.clear_fun}>Clear</button>
                        <button className="btn bg-primary bt2" onClick={this.onSubmit.bind(this)}><Link to="/drive_reg">Sign In</Link></button>
                </div>
            </div>
        );
    }
}

export default Login;

