import Charts from "../Charts";
import Sidebar from "../Sidebar";
import React, { Component } from "react";
class Class extends Component {
  render() {
    return (
      <div className="charts-page">
        <Sidebar />
        <Charts />
      </div>
    );
  }
}
export default Class;
