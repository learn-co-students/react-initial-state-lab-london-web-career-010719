
import React, { Component } from 'react';

class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

    return (
      <div>{message}</div>
    )
}

  // render() { 
  //   return ( 
  //     this.state.secondsLeft === 0 ? <div> Boom!</div> :
  //       <div> {this.state.secondsLeft} seconds left before I go boom!
  //       </div>
  //    );
  // }
}
 
export default Bomb;