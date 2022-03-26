import React, { Component } from "react";

import Page from "./paginator_conts/Page";

type Counter = {
  pageNum: number;
};

class Paginator extends Component<Counter> {
  state: Counter = {
    pageNum: this.props.pageNum
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link">Previous</a>
            </li>
            {Array.from(Array(this.props.pageNum).keys()).map((x) => (
              <Page key={x} pageindex={x + 1} />
            ))}
            <li className="page-item">
              <a className="page-link">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Paginator;
