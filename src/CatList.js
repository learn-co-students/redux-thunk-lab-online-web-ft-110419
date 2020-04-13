// write your CatList component here

import React, { Component } from "react";

export default class CatList extends Component {
  constructor(props) {
    super(props)
  }

  renderCatPics() {
    return this.props.catPics.map(
      (cat, i) => <img key={i} src={cat.url} alt='cat'/>
    )
  }

  render() {
    return (
      <ul>
        {this.renderCatPics()}
      </ul>
    )
  }
}