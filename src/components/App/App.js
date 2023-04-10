import { Component } from "react";
import "./App.css";
import Tricks from "../Tricks/Tricks";
import Form from "../Form/Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3001/api/v1/tricks")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ tricks: data });
      });
  };

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form />
        <Tricks allTricks={this.state.tricks} />
      </div>
    );
  }
}

export default App;
