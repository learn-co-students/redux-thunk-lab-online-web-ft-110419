import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import CatList from './CatList';

class App extends Component {   

	componentDidMount() {
		console.log(this.props)
		this.props.fetchCats()
	}

	renderCatPics = () => {
		if (this.props.loading === false) {
			return <CatList catPics={this.props.catPics} />
		} else {
			return <h3>Loading...</h3>
		}
	}
  
	render() {
		console.log(this.props.catPics)
		return (
		<div>
			<h1>CatBook</h1>
			{this.renderCatPics()}
		</div>
		);
	}
}

const mapStateToProps = state => {
  return {
	 catPics: state.cats,
	 loading: state.loading
  }
};

const mapDispatchToProps = dispatch => {
  return {
	 fetchCats: () => dispatch(fetchCats())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);