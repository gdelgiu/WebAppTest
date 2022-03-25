import React, { Component } from "react";

import Page from "./paginator_conts/Page";

type Counter = {
  pageNum: number;
};

class Paginator extends Component<Counter> {
  state: Counter = {
    pageNum: 10
  };

  render() {
    return (
      <div className="container ms-0 mt-0">
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item disabled">
              <a className="page-link">Previous</a>
            </li>
            {Array.from(Array(this.state.pageNum).keys()).map((x) => (
              <Page key={x} pageindex={x + 1} />
            ))}
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Paginator;
