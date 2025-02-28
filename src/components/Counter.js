import React, {Component} from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }
 
    increament(){
        // this.setState({
        //     count: this.state.count + 1
        // },
        // () => {
        //     console.log('Callback value',this.state.count)
        // }
        // )
        // console.log(this.state.count)
        this.setState((prevState, props) => ({
            count: prevState.count + props.addValue
        }))
        console.log(this.state.count)
    }
    increamentFive(){
        this.increament()
        this.increament()
        this.increament()
        this.increament()
        this.increament()
    }

    // decrease(){
    //     this.setState({
    //         count: this.state.count -1
    //     }
    //     )
    // }

    render(){
        return(
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={ () => this.increamentFive()}>Increament</button>
                <button onClick={()=> this.decrease()}>Decrease</button>
            </div>
        )
    }
}

export default Counter