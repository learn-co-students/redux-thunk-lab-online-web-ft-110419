import React, { Component } from 'react';

export default class CatList extends Component {
    catImages = () => {
        return this.props.catPics.map(cat => <img width="60" key={cat.id} id={cat.id} src={cat.url} alt={cat.id} />)
    }

    render() {
        return (
            <div>
                {this.catImages()}
            </div>
        )
    }
}