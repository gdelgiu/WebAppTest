import React, { Component } from "react";
import Navbar from "./contents/Navbar";
import Paginator from "./contents/Paginator";
import "./styles.css";

type VarMain = {
  maxPages: number;
};

export default class App extends Component<VarMain> {
  state: VarMain = {
    maxPages: 5
  };

  render() {
    return (
      <>
        <Navbar />
        <Paginator pageNum={this.state.maxPages} />
      </>
    );
  }
}
