import React from "react";
import PropTypes from "prop-types";

function Movie({movieName}) {
  return <h1>I like {movieName}</h1>
}
Movie.propTypes = {

}

class App extends React.Component{
  constructor(props) {
    super(props);
    console.log("hello")
  }
  state = {
    count: 1
  };
  add = () => {
    this.setState(current => ({ count: current.count+1 }));
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("I just updated");
  }
  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }
  render() {
    console.log("render");
    return(
      <div>
        <h1>The Number is : {this.state.count}</h1>
        <button onClick={ this.add}>Add</button>
        <button onClick={ this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;

