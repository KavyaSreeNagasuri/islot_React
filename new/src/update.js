import React, { Component } from 'react';
import Nav from './navbar';

class Update extends Component {
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
        if(!fields["email"]){
            isError=true;
            err["emailError"]="*Enter EmailId";
        }
        if(typeof fields["email"]!=="undefined"){
            var emailfield=fields["email"].match(/^\S+@\S+\.\S+$/i);
            if(!emailfield){
                // isError=true;
                err["emailError"]="*Enter Valid Email";
            }
        }
        if(!fields["mobile"]){            
            isError=true;
            err["mobileError"]="*Please Enter mobile number";
        }
        if(typeof fields["mobile"]!== "undefined"){
            var length=fields["mobile"].length;
            if(!fields["mobile"].match((/^[1-9][0-9]/))){
                // isError=true;
                err["mobileError"]="*Number shouldn't contain letters";
            }
            else if(length<10||length>10){
                // isError=true;
                err["mobileError"]="*Number should have 10 digits length";
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
                        <h3><i>Update Profile</i></h3>
                    </div>  
                    <div className="row">
                        <label className="col-sm-3">Email</label>
                        <input type="email" value={this.state.fields["email"]}  onChange={this.change} name="email" className="form-control"/>
                        <span class="size" style={{color: "red"}}>{this.state.errors["emailError"]}</span>                    
                    </div>
                    <div className="row">
                        <label className="col-sm-3">Mobile Number</label>
                        <input type="text" value={this.state.fields["mobile"]} ref={el => this.inputTitle5 = el} onChange={this.change} name="mobile" className="form-control"/>
                        <span class="size" style={{color: "red"}}>{this.state.errors["mobileError"]}</span>                                        
                    </div>
                <div className=" buttons">
                 <button className="btn bg-primary">Update</button>
        
                </div>
            </div>
            </div>
        );
    }
}

export default Update;
