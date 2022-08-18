import React, { Component } from "react";
// remember class name is uppercase sensitive
class CounterActionHandle extends Component {
  // state it has all the props we need
  state = {
    // in React, we use const, mean constant
    value: this.props.counter.value,
    // imageUrl:'https://picsum.photos/200'
    tag:["tag1","tag2","tag3"]
  };
  // from here, please remember to google bind(), I dont understand now.
//   constructor(props){
//     super(props);
//     this.state={
//         value:this.props.value
//     }
//     this.handleIncreament = this.handleIncreament.bind(this);
//   }
  handleIncreament=product=>{
    console.log('Increament clicked',this,product);
    // If we want to use this.state.count++ to increase the count, it will not work, coz react doesnt konw what is the change, we should use below way to update state
    // this way will sysc to update state
    this.setState({value: this.state.value +1})
  }

  dohandleIncreament=()=>{
    this.handleIncreament({id:1})
  }
  render() {
    this.getBadgeClasses();
    console.log("props",this.props);
    return (
        
      // if we dont want to see the <div> inside the root dev, then just use React.Fragment
      <React.Fragment>
        <h4>{this.props.id}</h4>
        {/* <img src ={this.state.imageUrl} alt=""/> */}
        {/* why we dont use class? because in javascript we had this class, we got to make diff */}
        {/* if you want to learn why I write this, learn boostrap */}
        <span className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button onClick={()=>this.handleIncreament({id:1})} className="btn btn-secondary btn-sm">Increment</button>
        <button className="btn btn-danger btn-sm m-2" onClick={()=>this.props.onDelete(this.props.counter.id)}>Delete</button>
        <ul>{this.state.tag.map(tag=><li key={tag}>{tag}</li>)}</ul>
      </React.Fragment>
    );
  }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

  formatCount() {
    // below case is equal to this.state.count
    const { value: count } = this.state;
    return count === 0 ? <h1>ZERO</h1> : this.state.value;
  }
}
export default CounterActionHandle;
