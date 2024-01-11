import React, {Component} from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    increament(){
        this.setState({
            count: this.state.count + 1
        })
    }

    decrease(){
        this.setState({
            count: this.state.count -1
        })
    }

    render(){
        return(
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={ () => this.increament()}>Increament</button>
                <button onClick={()=> this.decrease()}>Decrease</button>
            </div>
        )
    }
}

export default Counter