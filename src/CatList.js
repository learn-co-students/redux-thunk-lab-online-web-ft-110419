// write your CatList component here
import React, { Component } from "react";

class CatList extends Component {
  renderCats = () => {
    const { catPics } = this.props;
    return catPics.map((cat) => (
      <img key={cat.id} src={cat.url} alt={`cat-${cat.id}`} />
    ));
  };

  render() {
    return <div>{this.props.isLoading ? "Loading..." : this.renderCats()}</div>;
  }
}

export default CatList;
