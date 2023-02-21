import Dash2 from "../Dash2";
import Sidebar from "../Sidebar";
import React, { Component } from "react";
class Class extends Component {
  render() {
    return (
      <div className="dash2-page">
        <Sidebar />
        <Dash2 />
      </div>
    );
  }
}
export default Class;
