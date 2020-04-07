import React, { Component } from 'react';

class CatList extends Component {
	render() {
		return (
			<div>
				{this.props.catPics.map((catPic, index) => <img key={index} src={catPic.url} alt={catPic.url} />)}
			</div>
		);
	}
}

export default CatList;
