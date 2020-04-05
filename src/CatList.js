import React, { Component } from 'react';

class CatList extends Component {

    render () {
        console.log(this.props.catPics)
        return (
            <div>Test CatList
                {this.props.catPics.map(pic => <img src={pic.url} alt="cat pic" key={pic.id}></img>)}
            </div>
        )
    }
}

export default CatList
