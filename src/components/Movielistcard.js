import React, { Component } from "react";
import { Button, Card, CardColumns } from "react-bootstrap";
import axios from "axios";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Movielistcard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date("7/13/2010"),
      endDate: new Date("12/15/2010"),
    };
    // Setting up functions
    this.onChangeMovieusermovietitle =
      this.onChangeMovieusermovietitle.bind(this);
    this.onChangeMovieuserdaterented =
      this.onChangeMovieuserdaterented.bind(this);
    this.onChangeMovieuserdatereturned =
      this.onChangeMovieuserdatereturned.bind(this);
    this.onChangeMovieuserrentalamount =
      this.onChangeMovieuserrentalamount.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      movietitle: "",
      daterented: "",
      datereturned: "",
      rentalamount: "",
    };
  }
  onChangeMovieuserdaterented(e) {
    this.setState({
      startDate: e,
    });
  }
  onChangeMovieuserdatereturned(e) {
    this.setState({
      endDate: e,
    });
  }

  onChangeMovieusermovietitle(e) {
    this.setState({ movietitle: e.target.value });
  }

  onChangeMovieuserrentalamount(e) {
    this.setState({ rentalamount: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const MovieuserObject = {
      movietitle: this.props.obj.name,
      daterented: this.state.startDate,
      datereturned: this.state.endDate,
      rentalamount: this.props.obj.dailyrental,
    };

    axios
      .post("/Movieusers/create-movieuser", MovieuserObject)
      .then((res) => console.log(res.data));

    this.setState({
      movietitle: "",
      daterented: "",
      datereturned: "",
      rentalamount: "",
    });
  }
  noofday() {
    const diffInMs = Math.abs(this.state.endDate - this.state.startDate);
    return diffInMs / (1000 * 60 * 60 * 24);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <CardColumns>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.props.obj.url} />
            <Card.Body>
              <Card.Title
                controlId="movietitle"
                type="text"
                value={this.props.obj.name}
                onChange={this.onChangeMovieusermovietitle}
              >
                {this.props.obj.name}
              </Card.Title>
              <Card.Text>Gener: {this.props.obj.gener}</Card.Text>
              <Card.Text
                controlId="rentalamount"
                type="text"
                value={this.state.rentalamount}
                onChange={this.onChangeMovieuserrentalamount}
              >
                Price: {this.props.obj.dailyrental}
              </Card.Text>
              <Card.Text>
                Avalable Quantity: {this.props.obj.noofcopies}
              </Card.Text>
              <div className="form-group">
                Start Date:
                <DatePicker
                  controlId="daterented"
                  selected={this.state.startDate}
                  onChange={this.onChangeMovieuserdaterented}
                  name="startDate"
                  type="text"
                  dateFormat="MM/dd/yyyy"
                />
                End Date:
                <DatePicker
                  controlId="datereturned"
                  selected={this.state.endDate}
                  onChange={this.onChangeMovieuserdatereturned}
                  name="endtDate"
                  dateFormat="MM/dd/yyyy"
                />
              </div>
              <Button variant="primary" type="submit">
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        </CardColumns>
      </form>
    );
  }
}
