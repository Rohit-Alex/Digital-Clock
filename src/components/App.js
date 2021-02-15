import React, { Component } from "react";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timer = setInterval(() => this.setState({ date: new Date() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.date.toLocaleTimeString()}</h3>
      </div>
    );
  }
}

export default App;
