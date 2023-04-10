import { Component } from "react";
import "./App.css";
import Tricks from "./Tricks/Tricks";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tricks: [
        {
          id: 1,
          name: "treflip",
        },
        {
          id: 2,
          name: "heelflip",
        },
        {
          id: 3,
          name: "frontside 50-50, backside 180 out",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Tricks allTricks />
      </div>
    );
  }
}

export default App;
