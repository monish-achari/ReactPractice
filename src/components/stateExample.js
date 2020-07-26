import React, {Component } from 'react';


class ButtonOnOff extends Component{
    constructor(){
        super()
        this.state = { 
            message:"Hello User",
            status:"ON",
            nextStatus:"OFF",
            bulbImagge:"https://www.w3schools.com/js/pic_bulbon.gif"    
          }
    }

    ChangeStatus(currentState,nextState){
        var blbimg = function(currentState){
            if(currentState == "ON"){
                return "https://www.w3schools.com/js/pic_bulboff.gif"
                
            }else{
                return "https://www.w3schools.com/js/pic_bulbon.gif"
            }
        }

        this.setState({
            message :"Thanks for turning " + nextState,
            status:nextState,
            nextStatus:currentState,
            bulbImagge:blbimg(currentState),
            
        })
    }

    render() {
        return (
             <div>
                  <h3>{this.state.message} </h3>
                  <h3>Blub is {this.state.status}</h3>
                  <img src={this.state.bulbImagge} /><br />
                 <button onClick = {() => this.ChangeStatus(this.state.status,this.state.nextStatus)}>
                    Please Turn {this.state.nextStatus}
                 </button>
             </div>
        );
    }
    
}



export default ButtonOnOff; 