import React, { Component } from 'react';


// state data for 4 counters
//const data = [
//  { id: 1, value: 1 },
//  { id: 2, value: 2 },
//  { id: 3, value: 3 },
//  { id: 4, value: 4 },
//];

// Counter Component

class Counter extends Component {
  render() {
    const { value, increment, decrement } = this.props;
    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button className="button is-danger is-small" onClick={decrement}>-</button>
          <button className="button is-success is-small" onClick={increment} >+</button>
        </div>
      </div>
    );
  }
}

class Total extends Component {

  totalValue = () => this.props.getData.reduce((a, b) => a + b.value, 0)

  render() {
    return(
      <div className="counter">
        <b>Total Value: {this.totalValue()}</b>
      </div>
    )
  }
}

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      data: [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
        { id: 4, value: 4 },
      ]
    }
  }

  onIncrement = (id) => {
    this.setState(prevState => ({
      data: prevState.data.map( m => m.id === id ? {id: m.id, value: m.value++} : m)
      })
    );
  }

  onDecrement = (id) => {
    this.setState(prevState => ({
      data: prevState.data.map( m => m.id === id ? {id: m.id, value: m.value--} : m)
      })
    );
  }

  render() {
    return (
      <div>
        {this.state.data.map((counter) => (
          <Counter
            increment={() => this.onIncrement(counter.id)}
            decrement={() => this.onDecrement(counter.id)}
            key={counter.id} value={counter.value} />
        ))}
        <Total getData={this.state.data} />
      </div>
    );
  }
}

export default App;
