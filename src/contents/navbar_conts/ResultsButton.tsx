import React, { Component } from "react";

type VarResults = {
  maxResults: number;
  updatePages: (value: number) => void;
};

type updateMaxResults = (event: React.MouseEvent<HTMLButtonElement>) => void;

export default class ResultsButton extends Component<
  VarResults,
  updateMaxResults
> {
  state: VarResults = {
    maxResults: 5,
    updatePages: this.props.updatePages
  };

  constructor(props: any) {
    super(props);
    this.updateMaxResults = this.updateMaxResults.bind(this);
  }

  updateMaxResults(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    this.setState({
      maxResults: this.state.maxResults + 5
    });
    if (this.state.maxResults === 20) {
      this.setState({
        maxResults: 5
      });
    }
    this.props.updatePages(this.state.maxResults + 5);
  }

  render() {
    return (
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={this.updateMaxResults}
      >
        Max Results: {this.state.maxResults}
      </button>
    );
  }
}
