import React, { Component } from "react";
class Counter2 extends Component {
  state = {
    count: 0,
    tag: [],
  };
  //conditional render
  renderTags() {
    if (this.state.tag.length === 0) return <p>there are no tag!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return <div>{this.state.tag.length ===0 && "there are no tags!!"}{this.renderTags()}</div>;
  }
}
export default Counter2;
