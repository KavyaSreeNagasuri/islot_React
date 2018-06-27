import React, { Component } from 'react';
import SkillTile from './skilltile';
import './skills.css';

class Skills extends Component {
    constructor(){
        super();
        this.state={
            dat:[],
            sname:''
            // skillInfo: [
            // ]
        }
        this.pressKey=this.pressKey.bind(this);
    }
    pressKey(e){
        if(e.which===13){
            var x=e.target.value;
            const newskill={
                // id: this.state.skillInfo.length+1,
                skill:x
            }
            // var joined = this.state.skillInfo.concat(newskill);
            // this.setState({
            //     skillInfo:(joined)
            // })
            this.inputTitle.value = "";        
            this.setState({
                dat:this.state.dat.concat(newskill)
            })
            // this.state.sname='';
            fetch('https://pythonreact-f0b4d.firebaseio.com/skills.json', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "id": 1,
                    "skill": x
                })
            })
            
            // .then(fetch("https://pythonreact-f0b4d.firebaseio.com/skills.json").then(res => res.json()).
            //     then(data => console.log(data))  )
        }
        console.log(this.state.skillInfo);
    }
    componentDidMount(){
        fetch("https://pythonreact-f0b4d.firebaseio.com/skills.json").then(response=>response.json()).then(
            data=>{
                console.log(data);
                var l =Object.keys(data);
                let objects=[]
                for(var i=0;i<l.length;i++){
                    var k = l[i];
                    objects[i]= data[k]
                }
                console.log(objects)
                this.setState({
                    dat:objects
                })
                console.log("in dat"+this.state.dat)
            }
        );
    }
    render() {
        return (
            <div className="container3">
                <h3><i>Skills Management</i></h3>
                <div className="form-group">
                    <label>Add a Skill</label>
                    <input id="i1" type="text" onKeyDown={this.pressKey} ref={el => this.inputTitle = el} onChange={this.change} className="form-control"/>
                    
                        <div className="row">
                        {
                            this.state.dat.map(skillEle => {
                            return (
                                <SkillTile sInfo={skillEle} />
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