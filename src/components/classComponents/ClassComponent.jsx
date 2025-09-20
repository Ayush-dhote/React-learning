import React, { Component } from 'react'

export default class ClassComponent extends Component {

  constructor(props) {
    super(props);  
    this.state = {
      count: 0,
    };   

  }

  componentDidMount() { 
    console.log('Component mounted');

  }



  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('Component updated');
    console.log('Previous state:', prevState);
    console.log('Current state:', this.state);
  }

  componentWillUnmount() {
    console.log('Component will unmount');

  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    )
  }
}
