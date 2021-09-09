import React, { Component } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
// import { useGlobalFilter } from "react-table";
// import { Globalfilter } from "./Globalfilter";

export default class Movietablerow extends Component {
  constructor(props) {
    super(props);
    this.deletemovieuser = this.deletemovieuser.bind(this);
  }

  deletemovieuser() {
    axios
      .delete("/movieusers/delete-movieuser/" + this.props.obj._id)
      .then((res) => {
        console.log("Details successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // const {
  //   getTableprops,
  //   getTableBodyprops,
  //   rows,
  //   prepareRow,
  //   state,
  //   setGlobalFilter,
  // }
  //   = useTable({
  //     columns,
  //     data,
  //   },useGlobalFilter)
  // }
  // const {globalFilter}= state

  render() {
    return (
      <>
        {/* <Globalfilter filter={globalFilter} setFilter={setGlobalFilter}/> */}
        <tr>
          <td>{this.props.obj.movietitle}</td>
          <td>{this.props.obj.daterented}</td>
          <td>{this.props.obj.datereturned}</td>
          <td>{this.props.obj.rentalamount}</td>
          <td>
            <Button onClick={this.deletemovieuser} size="sm" variant="danger">
              Delete
            </Button>
          </td>
        </tr>
      </>
    );
  }
}
