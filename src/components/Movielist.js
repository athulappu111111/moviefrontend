import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Movietablerow from "./Movietablerow";

export default class Movielist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    axios
      .get("/movies/")
      .then((res) => {
        this.setState({
          movies: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.movies.map((res, i) => {
      return <Movietablerow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="table-wrapper">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Genre</th>
              <th>Daily Rental</th>
              <th>No of copies</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}
