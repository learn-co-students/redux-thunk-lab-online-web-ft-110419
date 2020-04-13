import React, { Component } from 'react';

export default class CatList extends Component {
    catImages = () => {
        return this.props.catPics.map(cat => <img src={cat.url} />)
    }

    render() {
        return (
            <div>
                {this.catImages()}
            </div>
        )
    }
}