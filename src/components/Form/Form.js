import { Component } from "react/cjs/react.production.min";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      stance: "",
      name: "",
      obstacle: "",
      tutorial: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newTrick = {
      id: Date.now(),
      ...this.state,
    };
    console.log("New Trick", newTrick);
    this.props.newTrickMethod(newTrick);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ stance: "", name: "", obstacle: "", tutorial: "" });
  };

  render() {
    return (
      <>
        <form>
          <select
            name="stance"
            value={this.state.stance}
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
            name="name"
            placeholder="Name of Trick"
            value={this.state.name}
            onChange={(event) => this.handleChange(event)}
          />
          <select
            name="obstacle"
            value={this.state.obstacle}
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
