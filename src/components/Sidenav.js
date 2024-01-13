import React, { Component } from "react"; 

class Sidenav extends Component{
    clickHandler = () =>{console.log('Hi')} 
    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>ClassButton </button>
            </div>
        )
    }
}
export default Sidenav