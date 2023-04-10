import { Component } from "react/cjs/react.production.min";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      stanceValue: "",
      trick: "",
      obstacleValue: "",
      tutorial: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted");
  };

  render() {
    return (
      <>
        <form>
          <select
            name="stanceValue"
            value={this.state.stanceValue}
            onChange={(event) => this.handleChange(event)}
          >
            <option value="" disabled>
              Choose your Stance
            </option>
            <option value="Regular">Regular</option>
            <option value="Switch">Switch</option>
          </select>
          <input
            type="text"
            name="trick"
            placeholder="Name of Trick"
            value={this.state.trick}
            onChange={(event) => this.handleChange(event)}
          />
          <select
            name="obstacleValue"
            value={this.state.obstacleValue}
            onChange={(event) => this.handleChange(event)}
          >
            <option value="" disabled>
              Choose your Obstacle
            </option>
            <option value="Flatground">Flatground</option>
            <option value="Ledge">Ledge</option>
            <option value="Rail">Rail</option>
            <option value="Stairs">Stairs</option>
            <option value="Pool">Pool</option>
          </select>
          <input
            type="text"
            name="tutorial"
            placeholder="Link to tutorial"
            value={this.state.tutorial}
            onChange={(event) => this.handleChange(event)}
          />
          <button onClick={(event) => this.handleSubmit(event)}>
            Send it!
          </button>
        </form>
      </>
    );
  }
}

export default Form;
