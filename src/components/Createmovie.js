import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
// import styled from "styled-components";

export default class Createmovie extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangemoviename = this.onChangemoviename.bind(this);
    this.onChangemovieurl = this.onChangemovieurl.bind(this);
    this.onChangemoviegener = this.onChangemoviegener.bind(this);
    this.onChangemoviedailyrental = this.onChangemoviedailyrental.bind(this);
    this.onChangemovienoofcopies = this.onChangemovienoofcopies.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: "",
      url: "",
      gener: "",
      dailyrental: "",
      noofcopies: "",
    };
  }

  onChangemoviename(e) {
    this.setState({ name: e.target.value });
  }
  onChangemovieurl(e) {
    this.setState({ url: e.target.value });
  }
  onChangemoviegener(e) {
    this.setState({ gener: e.target.value });
  }

  onChangemoviedailyrental(e) {
    this.setState({ dailyrental: e.target.value });
  }

  onChangemovienoofcopies(e) {
    this.setState({ noofcopies: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const movieObject = {
      name: this.state.name,
      url: this.state.url,
      gener: this.state.gener,
      dailyrental: this.state.dailyrental,
      noofcopies: this.state.noofcopies,
    };

    axios
      .post("/movies/create-movie", movieObject)
      .then((res) => console.log(res.data));

    this.setState({
      name: "",
      url: "",
      gener: "",
      dailyrental: "",
      noofcopies: "",
    });
  }

  render() {
    return (
      <div classname="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangemoviename}
            />
          </Form.Group>

          <Form.Group controlId="url">
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              type="text"
              value={this.state.url}
              onChange={this.onChangemovieurl}
            />
          </Form.Group>

          <Form.Group controlId="gener">
            <Form.Label>Genre</Form.Label>
            <Form.Control
              type="text"
              value={this.state.genre}
              onChange={this.onChangemoviegener}
            />
          </Form.Group>

          <Form.Group controlId="dailyrental">
            <Form.Label>Daily Rental</Form.Label>
            <Form.Control
              type="text"
              value={this.state.dailyrental}
              onChange={this.onChangemoviedailyrental}
            />
          </Form.Group>

          <Form.Group controlId="noofcopies">
            <Form.Label>No of copies available</Form.Label>
            <Form.Control
              type="text"
              value={this.state.noofcopies}
              onChange={this.onChangemovienoofcopies}
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Create Movie
          </Button>
        </Form>
      </div>
    );
  }
}
