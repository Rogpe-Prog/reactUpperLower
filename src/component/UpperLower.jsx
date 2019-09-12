import React, { Component } from 'react'
import './UpperLower.css'

export default class UpperLower extends Component {

    state = {
        message: "AlOhA"
    }
    constructor(props){
        super(props)

        this.setMessage = this.setMessage.bind(this)
        this.setUpper = this.setUpper.bind(this)
        this.setLower = this.setLower.bind(this)
    }
    setMessage(e){
        this.setState({ message: e.target.value })
    }
    setUpper(){
        let message = this.state.message
        message = message.toUpperCase()
        this.setState({ message })
    }
    setLower(){
        let message = this.state.message
        message = message.toLowerCase()
        this.setState({ message })
    }

    render(){
        const { message } = this.state
        return(
            <div className="App">
                <textarea className="textarea" 
                    value={message}
                    onChange={this.setMessage}
                />
                <div>
                <button className="button" onClick={ this.setUpper } >Upper</button>
                <button className="button" onClick={ this.setLower }>Lower</button>
                </div>
            </div>


        )
    }
}
