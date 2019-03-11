// your Bomb code here!
import React, { Component } from 'react';
export default class Bomb extends Component {
  constructor(props){
    super(props)
    this.state={
      secondsLeft:props.initialCount
    }
  }

  checkBoom = () => {
    if (this.props.initialCount === 0) {
      return 'Boom!'
    }
    else {
      return `${this.props.initialCount} seconds left before I go boom!`
    }
  }

  render(){
    return (
      <div>{this.checkBoom()}</div>
    )
  }
}
