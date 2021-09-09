import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class Createcustomer extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeCustomerfname = this.onChangeCustomerfname.bind(this);
    this.onChangeCustomerlname = this.onChangeCustomerlname.bind(this);
    this.onChangeCustomerEmail = this.onChangeCustomerEmail.bind(this);
    this.onChangeCustomerpassword = this.onChangeCustomerpassword.bind(this);
    this.onChangeCustomerphoneno = this.onChangeCustomerphoneno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      phoneno: "",
    };
  }

  onChangeCustomerfname(e) {
    this.setState({ fname: e.target.value });
  }
  onChangeCustomerlname(e) {
    this.setState({ lname: e.target.value });
  }

  onChangeCustomerEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeCustomerpassword(e) {
    this.setState({ password: e.target.value });
  }

  onChangeCustomerphoneno(e) {
    this.setState({ phoneno: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const CustomerObject = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      password: this.state.password,
      phoneno: this.state.phoneno,
    };

    axios
      .post("/Customers/create-customer", CustomerObject)
      .then((res) => console.log(res.data));

    this.setState({
      fname: "",
      lname: "",
      email: "",
      password: "",
      phoneno: "",
    });
  }

  render() {
    return (
      <div classfname="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="fname">
            <Form.Label>First name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.fname}
              onChange={this.onChangeCustomerfname}
            />
          </Form.Group>

          <Form.Group controlId="lname">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.lname}
              onChange={this.onChangeCustomerlname}
            />
          </Form.Group>

          <Form.Group controlId="Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={this.onChangeCustomerEmail}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={this.state.password}
              onChange={this.onChangeCustomerpassword}
            />
          </Form.Group>

          <Form.Group controlId="phoneno">
            <Form.Label>Phone No</Form.Label>
            <Form.Control
              type="text"
              value={this.state.phoneno}
              onChange={this.onChangeCustomerphoneno}
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Create Customer
          </Button>
        </Form>
      </div>
    );
  }
}
