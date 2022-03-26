import React, { Component } from "react";
import SearchBar from "./navbar_conts/SearchBar";
import CustomName from "./navbar_conts/CustomName";
import ResultsButton from "./navbar_conts/ResultsButton";

type VarContents = {
  updatePages: (value: number) => void;
};

class Navbar extends Component<VarContents> {
  state: VarContents = {
    updatePages: this.props.updatePages
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <CustomName />
          <SearchBar />
          <ResultsButton maxResults={5} updatePages={this.state.updatePages} />
        </div>
      </nav>
    );
  }
}

export default Navbar;
