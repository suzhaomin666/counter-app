import React, { Component } from "react";
class Counter extends Component {
  // state it has all the props we need
  state = {
    // in React, we use const, mean constant
    count: 0,
    // imageUrl:'https://picsum.photos/200'
    tag:["tag1","tag2","tag3"]
  };
  render() {
    this.getBadgeClasses();

    return (
      // if we dont want to see the <div> inside the root dev, then just use React.Fragment
      <React.Fragment>
        {/* <img src ={this.state.imageUrl} alt=""/> */}
        {/* why we dont use class? because in javascript we had this class, we got to make diff */}
        {/* if you want to learn why I write this, learn boostrap */}
        <span className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>{this.state.tag.map(tag=><li key={tag}>{tag}</li>)}</ul>
      </React.Fragment>
    );
  }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

  formatCount() {
    // below case is equal to this.state.count
    const { count } = this.state;
    return count === 0 ? <h1>ZERO</h1> : this.state.count;
  }
}
export default Counter;
