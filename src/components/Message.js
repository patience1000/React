import React, {Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Welcome  Visitor'
            
        }
    }

    popUP(){
        this.setState({
            message: 'Thanks for subscribing'
        }
            )
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <h2>{this.state.number}</h2>
                <button onClick={() => this.popUP()}>Subscribe</button>
            </div>
        )
    }
}

export default Message