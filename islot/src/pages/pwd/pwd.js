import React, { Component } from 'react';
import NavAdmin from '../navbaradmin/navbaradmin';

class Password extends Component {
    constructor(){
        super();
        this.state={
            field:'',
            error:'',
            isError:true
        }
        this.change=this.change.bind(this);
        this.checkForErrors=this.checkForErrors.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.clear_fun=this.clear_fun.bind(this);
    };
    clear_fun(){
        this.setState({
            field:'',
            error:''
        })
    }
    change(e){
        let field=e.target.value;
        let error='';
        this.setState({
            field:field
        });
        if(typeof field!=="undefined"){
            var len=(field).length;
            if(len<4 || len >12){
                // isError=true;
                error="*Please Enter a password between 4 and 12 characters"
            }
            else{
                var pwdfield=field.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/i);
                if(!pwdfield){
                    // isError=true;
                    error="*Should contain atleast 1 Capital, 1 small letter & 1 digit";
                }
            }
        }
        if(error === '')
            this.setState({isError:false})
        else
            this.setState({isError:true})
        // console.log(this.state.isError);
        this.setState({error:error});
    };
    checkForErrors(){
        let error='';
        let isError=false;
        if(!this.state.field){
            isError=true;
            error="*Enter Password";
        }
        this.setState({error:error});
        return isError;
    }
    onSubmit= (e) =>{
        e.preventDefault();
        const err=this.checkForErrors();
        if(!err&& !this.state.isError){
            this.setState({
                field:'',
                error:''
            });
            alert("Form Submitted");
        }
        else{
            alert("Form has errors");
        }
    }
    render() {
        return (
            <div className="container2">
                <span><NavAdmin /></span>
                <div className="heading">
                    <h3><i>Change Password</i></h3>
                </div>
                <div className="form-group">  
                    <div className="row">
                        <label className="col-sm-3">Old Password</label>
                        <input name="password" type="password" className="form-control"/>
                    </div>
                    <div className="row">
                        <label className="col-sm-3">New Password</label>
                        <input type="password" value={this.state.field} onChange={this.change} name="pwd" className="form-control"/>
                        <span class="size" style={{color: "red"}}>{this.state.error}</span>                                        
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
