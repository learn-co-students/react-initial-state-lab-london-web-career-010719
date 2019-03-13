// your Bomb code here!
import React, {Component} from "react";


export default class Bomb extends Component {


    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    testFunc = (number) => {
        return number === 0 ? 'boom!' : `${number} seconds left before I go boom!` 
    }

    render() {
        // const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

        return (
            <div>{this.testFunc(this.state.secondsLeft)}</div>
        )
    }

}