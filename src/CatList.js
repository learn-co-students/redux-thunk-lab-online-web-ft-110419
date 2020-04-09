// write your CatList component here
import React, { Component } from 'react'

class CatList extends Component {
  render() {
    return (
      <div>
        { this.props.catPics.map( pic => {
          return <img src={pic.url} key={pic.id} alt="cat"/>
        })}
      </div>
    )
  }
}

export default CatList 