import React, {Component} from 'react';


class Ticker extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  };

  // Lifecycle methods
  componentDidMount() {
    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      })
    }, 1000);
  }

  // Reset method
  reset = () => {
    this.setState({
      count: 0,
    })
  };

  shouldComponentUpdate (nextProps, nextState) {
    // this is where we check a condition if it's true or false
    // and only allow a rerender if the condition is true
    return (nextState.count % 3 === 0) 
  }
  
  render() {
    return  (
      <div>
        <div>The ticker is: {this.state.count}</div>
        <div>
          <button type="button" onClick={this.reset}>Reset counter</button>
        </div>
      </div>
    )
  };
};

export default Ticker;