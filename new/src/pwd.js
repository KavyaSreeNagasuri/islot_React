import React, { Component } from 'react';
import Nav from './navbar';

class Password extends Component {
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
    clear_fun(){
        this.setState({
            fields:{},
            errors:{}
        })
    }
    change(e){
        // this.props.onChange({[e.target.name]:e.target.value});
        let fields1=this.state.fields;
        let field=e.target.name;
        fields1[field]=e.target.value;
        this.setState({
            fields:fields1
        });
    };
    checkForErrors(){
        let fields=this.state.fields;
        let err={};
        let isError=false;
        if(!fields["pwd"]){
            isError=true;
            err["pwdError"]="*Enter Password";
        }
        if(typeof fields["pwd"]!=="undefined"){
            var len=(fields["pwd"]).length;
            if(len<4 || len >12){
                isError=true;
                err["pwdError"]="*Please Enter a password between 4 and 12 characters"
            }
            else{
                var pwdfield=fields["pwd"].match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/i);
                if(!pwdfield){
                    isError=true;
                    err["pwdError"]="*Should contain atleast 1 Capital, 1 small letter & 1 digit";
                }
            }
        }
        this.setState({errors:err});
        return isError;
    }
    onSubmit= (e) =>{
        e.preventDefault();
        const err=this.checkForErrors();
        if(!err){
            this.setState({
                fields:{},
                errors:{},
            });
            alert("Form Submitted");
        }
    }
    render() {
        return (
            <div className="container2">
                <span><Nav /></span>
                <div className="form-group">
                    <div className="heading">
                        <h3><i>Change Password</i></h3>
                    </div> 
                    <div className="row"> 
                        <label className="col-sm-3">Old Password</label>
                        <input name="password" type="password" className="form-control"/>
                    </div>
                    <div className="row">
                        <label className="col-sm-3">New Password</label>
                        <input type="password" value={this.state.fields["pwd"]} onChange={this.change} name="pwd" className="form-control"/>
                        <span class="size" style={{color: "red"}}>{this.state.errors["pwdError"]}</span>                                        
                    </div> 
                </div>
                <div className="col-xs-10 buttons">
                    <button className="btn bg-primary bt3" onClick={this.onSubmit.bind(this)}>Change password</button>
                </div>
            </div>
        );
    }
}

export default Password;
