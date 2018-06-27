import React, { Component } from 'react';
import LocationTile from './locationtile';
import './location.css';

class Location extends Component {
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
            var locationalreadyexists=false;
            console.log("Enter Key"+ x);                        
            this.inputTitle.value = ""; 
            var data=this.state.dat;
            console.log(data);            
            for(var s in data){
                console.log(data[s].location);
                if(data[s].location===x){
                    console.log("Exists");                                
                    locationalreadyexists=true;
                    break;
                    alert("Location Already Exists");
                }
            }
            if(locationalreadyexists==false){               
                fetch('https://pythonreact-f0b4d.firebaseio.com/locations.json', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "id": this.state.id+1,
                        "location": x
                    })
                }).then(res =>this.fetchData());
            }
        }
    }
    fetchData(){
        console.log("fetch");
        fetch("https://pythonreact-f0b4d.firebaseio.com/locations.json").then(response=>response.json()).then(
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
        fetch("https://pythonreact-f0b4d.firebaseio.com/locations.json").then(response=>response.json()).then(
            data=>{
                if(data!==null){
                    var l =Object.keys(data);
                    let object={};
                    for(var i=0;i<l.length;i++){
                        var k = l[i];
                        object= data[k];
                        console.log("Every");
                        console.log(object);
                        if(object.id===id){
                        console.log("Match");                            
                            console.log(object);
                            fetch("https://pythonreact-f0b4d.firebaseio.com/locations/"+k+".json",{
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
                <h1><i>Location Management</i></h1>
                <div className="form-group">
                    <label>Add a Location</label>
                    <input id="i1" type="text" onKeyDown={this.pressKey} ref={el => this.inputTitle = el} onChange={this.change} className="form-control"/>
                        <div className="row">
                        {
                            this.state.dat.map(locationEle => {
                            return (
                                <LocationTile lInfo={locationEle} deleteloc={this.updateData}/>
                            )
                            })
                        }
                        </div> 
                    </div> 
                                                    
            </div>
        );
    }
}

export default Location;
