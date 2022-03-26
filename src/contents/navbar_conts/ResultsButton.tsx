import React, { Component } from "react";

type VarResults = {
  maxResults: number;
};

type updateMaxResults = (event: React.MouseEvent<HTMLButtonElement>) => void;

export default class ResultsButton extends Component<
  VarResults,
  updateMaxResults
> {
  state: VarResults = {
    maxResults: 5
  };

  constructor(props: any) {
    super(props);
    this.updateMaxResults = this.updateMaxResults.bind(this);
  }

  updateMaxResults(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    if (this.state.maxResults >= 20) {
      this.setState({
        maxResults: 5
      });
    } else {
      this.setState({
        maxResults: this.state.maxResults + 5
      });
    }
  }

  render() {
    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.updateMaxResults}
      >
        {this.state.maxResults}
      </button>
    );
  }
}
