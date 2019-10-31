import React, { PureComponent } from "react";
import "./form.css"

const initialState = {
  username: "",
  country: "None",
  isMale: true
};

const NONE = "None"

export class Userform extends PureComponent {
  state = {...initialState};

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleCountryChange = this.handleCountryChange.bind(this);
    this.userInputRef = React.createRef();
  }

  componentDidMount(){
    this.userInputRef.current.focus();
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.isValid()){
      this.props.submitHandler(this.state);
      this.setState({...initialState});
      this.userInputRef.current.focus();
    } else {
      alert("Either user name blank or country not selected")
    }
    
  }

  isValid() {
    return this.state.username !== "" &&
           this.state.country !== NONE 
  }

  handleUserChange(event) {
    this.setState({ username: event.target.value });
  }

  handleGenderChange(event) {
    this.setState({ isMale: event.target.value === "male" });
  }

  handleCountryChange(event) {
    this.setState({country: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="user-form">
        <label>
          <span>Enter user name: </span>
          <input
            type="text"
            ref={this.userInputRef}
            value={this.state.username}
            onChange={this.handleUserChange}
          />
        </label>
        <label>
          <span>Select Country: </span>
          <select value={this.state.country} onChange={this.handleCountryChange}>
            <option value="None">{NONE}</option>
            <option value="India">India</option>
            <option value="US">US</option>
            <option value="UK">UK</option>
          </select>
        </label>
        <label>
          <span>Select Gender: </span>
        <input
          type="radio"
          value="male"
          checked={this.state.isMale}
          onChange={this.handleGenderChange}
        /> Male
        <input
          type="radio"
          value="female"
          checked={!this.state.isMale}
          onChange={this.handleGenderChange}
        /> Female
        </label>
        <input type="submit"  value="Submit" />
      </form>
    );
  }
}
