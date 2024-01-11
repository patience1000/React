import React, {Component} from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    increament(){
       this.state.count = this.state.count + 1
       console.log(this.state.count)
    }

    render(){
        return(
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={ () => this.increament()}>Increament</button>
            </div>
        )
    }
}

export default Counter