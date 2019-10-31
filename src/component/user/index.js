import React, { Component } from "react";
import UserList from "./list";
import { Userform } from "./form";

export class User extends Component {
  state = {
    list: []
  };

  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(data) {
    this.setState({ list: [...this.state.list, data] });
  }

  render() {
    return (
      <div>
        <Userform submitHandler={this.submitHandler} />
        <UserList list={this.state.list} />
      </div>
    );
  }
}
