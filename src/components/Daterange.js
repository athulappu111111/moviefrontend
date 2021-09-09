import React, { Component } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Daterange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
    };
    this.starthandleChange = this.starthandleChange.bind(this);
    this.endhandleChange = this.endhandleChange.bind(this);
  }

  starthandleChange(date) {
    this.setState({
      startDate: date,
    });
  }
  endhandleChange(date) {
    this.setState({
      endDate: date,
    });
  }

  findDay(startDate, endDate) {
    let date;
    return (date = Math.floor(
      Math.abs(endDate - startDate) / (1000 * 60 * 60 * 24)
    ));
  }

  onFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.endDate);
  }

  render() {
    return (
      <form>
        <div className="form-group">
          Start Date:
          <DatePicker
            selected={this.state.startDate.value}
            onChange={this.starthandleChange}
            name="startDate"
            dateFormat="MM/dd/yyyy"
          />
          End Date:
          <DatePicker
            selected={this.state.endDate.value}
            onChange={this.endhandleChange}
            name="startDate"
            dateFormat="MM/dd/yyyy"
          />
        </div>
      </form>
    );
  }
}

export default Daterange;
