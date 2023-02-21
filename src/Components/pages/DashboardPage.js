import Dashboard from "../Dashboard";
import Sidebar from "../Sidebar";
import React, { Component } from "react";
class Class extends Component {
  render() {
    return (
      <div className="dashboard-page">
        <Sidebar />
        <Dashboard />
      </div>
    );
  }
}
export default Class;
