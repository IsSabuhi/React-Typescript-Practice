import React, { Component } from 'react'

interface Props {
  name: string;
}

class CComponent extends React.Component<Props, any> {
  constructor(props: any) {
    super(props);
    this.state = {
        count: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1});
  }

  reset = () => {
    this.setState({ count: 0})
  }

  render() {
    return (
      <div>
        <h1>Class component</h1>
        <h2>Hello, {this.props.name}</h2>
        <h3>Счётчик: {this.state.count}</h3>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>Сбросить</button>
      </div>

    )
  }
}

export default CComponent;