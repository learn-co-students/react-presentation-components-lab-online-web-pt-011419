import React, { Component } from 'react';

export default class SimpleComponent extends Component {
  state = {
    mood: "happy"
  }
  
  handleClick = () => {
    this.setState(previousState => {
      
      if (previousState.mood === "happy") {
          return {mood: "sad"};
      } else if (previousState.mood === "sad") {
          return {mood: "happy"};
      }
    })  
  }
  
  render() {
    return (
      <div onClick={this.handleClick}>{this.state.mood}</div>
    );
  }
}
