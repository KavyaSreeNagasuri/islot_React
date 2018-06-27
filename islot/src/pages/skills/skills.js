import React, { Component } from 'react';
import SkillTile from './skilltile';
import './skills.css';
import { EILSEQ } from 'constants';

class Skills extends Component {
    constructor(){
        super();
        this.state={
            dat:[],
            id:0
        }
        this.pressKey=this.pressKey.bind(this);
        this.fetchData=this.fetchData.bind(this);
        this.updateData=this.updateData.bind(this);
    }
    pressKey(e){
        var x=e.target.value;        
        if(e.which===13&&x!==''){
            var skillalreadyexists=false;
            this.inputTitle.value = ""; 
            var data=this.state.dat;
            console.log(data);            
            for(var s in data){
                console.log(data[s].skill);
                if(data[s].skill===x){
                    skillalreadyexists=true;
                    break;
                    alert("Skill Already Exists");
                }
            }
            if(skillalreadyexists==false){               
                fetch('https://pythonreact-f0b4d.firebaseio.com/skills.json', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "id": this.state.id+1,
                        "skill": x
                    })
                }).then(res =>this.fetchData());
            }
        }
    }
    fetchData(){
        console.log("fetch");
        fetch("https://pythonreact-f0b4d.firebaseio.com/skills.json").then(response=>response.json()).then(
            data=>{
                    if(data !==null){
                        var l =Object.keys(data);
                        let objects=[]
                        for(var i=0;i<l.length;i++){
                            var k = l[i];
                            objects[i]= data[k];
                        }
                        this.setState({
                            dat:objects,
                            id: objects[l.length-1].id                            
                        })
                        console.log("id="+this.state.id);                        
                    } 
                    else{
                        this.setState({
                            dat:[]
                        })
                    }
            })

    }
    updateData(id){
        console.log(id);
        fetch("https://pythonreact-f0b4d.firebaseio.com/skills.json").then(response=>response.json()).then(
            data=>{
                if(data!==null){
                    var l =Object.keys(data);
                    let object={};
                    for(var i=0;i<l.length;i++){
                        var k = l[i];
                        object= data[k];
                        if(object.id===id){
                            console.log(object);
                            fetch("https://pythonreact-f0b4d.firebaseio.com/skills/"+k+".json",{
                                method: 'delete'
                            }).then(res=>this.fetchData());
                        }
                    }
                }
            })                                                            
    }
    componentDidMount(){
        this.fetchData();
    }
    render() {
        return (
            <div className="container3">
                <h1><i>Skills Management</i></h1>
                <div className="form-group">
                    <label>Add a Skill</label>
                    <input id="i1" type="text" onKeyDown={this.pressKey} ref={el => this.inputTitle = el} onChange={this.change} className="form-control"/>
                    
                        <div className="row">
                        {
                            this.state.dat.map(skillEle => {
                            return (
                                <SkillTile sInfo={skillEle} deleteSk={this.updateData}/>
                            )
                            })
                        }
                        </div> 
                    </div> 
                                                    
            </div>
        );
    }
}

export default Skills;
