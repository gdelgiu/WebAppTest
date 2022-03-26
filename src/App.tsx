import { Component } from "react";
import Card from "./contents/Card";
import Navbar from "./contents/Navbar";
import Paginator from "./contents/Paginator";
import "./styles.css";

type VarMain = {
  maxPages: number;
};

type updatePages = (value: number) => void;

export default class App extends Component<VarMain, updatePages> {
  state: VarMain = {
    maxPages: 5
  };

  constructor(props: any) {
    super(props);
    this.updatePages = this.updatePages.bind(this);
  }

  updatePages(value: number) {
    this.setState({
      maxPages: value
    });
    if (this.state.maxPages >= 20) {
      this.setState({
        maxPages: 5
      });
    }
  }

  render() {
    return (
      <>
        <Navbar updatePages={this.updatePages} />
        <Card />
        <Paginator pageNum={this.state.maxPages} />
      </>
    );
  }
}
