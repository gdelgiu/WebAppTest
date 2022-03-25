import React, { Component } from "react";

type VarProps = {
  pageindex: number;
};

class Page extends Component<VarProps> {
  state: VarProps = { pageindex: this.props.pageindex };

  render() {
    return (
      <li className="page-item">
        <a className="page-link" href="#">
          {this.state.pageindex.toString()}
        </a>
      </li>
    );
  }
}

export default Page;
