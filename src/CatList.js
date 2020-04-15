// write your CatList component here
import React, { Component } from 'react'

class CatList extends Component {

  render() {
    return (
      <div>
       {this.props.catPics.map(catPic => <img key={catPic.id} src={catPic.url} />)}
      </div>
    )
  }

}

export default CatList
