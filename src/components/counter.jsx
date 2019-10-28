import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call to server and get the data from the server
    }
  }
  componentWillMount() {}
  /*  state = {
    value: this.props.value
    //tags: ["tag1", "tag2", "tag3"]
  };
 */
  /* constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  } */

  /* renderTags() {
    if (this.state.tags.length === 0) return <p>There are no text</p>;

    return (
      <u1>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </u1>
    );
  } */

  render() {
    //console.log("props", this.props);
    //let classes = this.getBadgeClasses();

    return (
      <div className="back-img">
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>

        {/* <span className={this.getBadgeClasses()}>{this.formatCount()}</span> */}

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <u1>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </u1>
        {this.state.tags.length === 0 && "please create new tag!"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}
export default Counter;
