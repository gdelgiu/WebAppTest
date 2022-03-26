import React, { Component } from "react";
import SearchBar from "./navbar_conts/SearchBar";
import CustomName from "./navbar_conts/CustomName";
import ResultsButton from "./navbar_conts/ResultsButton";
import NavTogglerButton from "./navbar_conts/NavTogglerButton";

type VarContents = {
  buttonMaxResults: number;
};

type updateButtonMaxResults = () => void;

class Navbar extends Component<VarContents, updateButtonMaxResults> {
  state: VarContents = {
    buttonMaxResults: 5
  };

  constructor(props: any) {
    super(props);
    this.updateButtonMaxResults = this.updateButtonMaxResults.bind(this);
  }

  updateButtonMaxResults() {
    this.setState({
      buttonMaxResults: 1
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <CustomName />
          <NavTogglerButton />
          <SearchBar />
          <ResultsButton maxResults={5} />
        </div>
      </nav>
    );
  }
}

export default Navbar;
