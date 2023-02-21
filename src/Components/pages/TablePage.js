import Table from "../Table";
import Sidebar from "../Sidebar";
import React, { Component } from "react";
class Class extends Component {
  render() {
    return (
      <div className="table-page">
        <Sidebar />
        <Table />
      </div>
    );
  }
}
export default Class;
