import React, { Component } from "react";
import CatList from "./CatList";
import { connect } from "react-redux";
import { fetchCats } from "./actions/catActions";

class App extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    return (
      <div className="App">
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics} isLoading={this.props.loading} />
      </div>
    );
  }
}

const mapStateToProps = ({ cats, loading }) => ({ catPics: cats, loading });

export default connect(mapStateToProps, { fetchCats })(App);
