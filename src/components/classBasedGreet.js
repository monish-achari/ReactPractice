import React, { Component } from "react";

class ClassGreetHello extends Component {
    render(){
        return (
            <h1>
                Hello {this.props.heroName}
                <p>  
                {this.props.children}
                </p>
            </h1>
        );
    }
}

export default ClassGreetHello;