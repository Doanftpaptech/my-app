import React, { Component } from "react";

import Counter from "./counter";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete= (e) =>{
    console.log("Event Handler Called" , e)
    const counters = this.state.counters.filter(c=>c.id !== e);
    this.setState({counters})
  }
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value} counter={counter} onDelete={this.handleDelete}>
            {/* <h4>title counter{e.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
