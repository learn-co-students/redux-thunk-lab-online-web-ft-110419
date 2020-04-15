import React, { Component } from 'react';
import {connect} from 'react-redux'
import CatList from './CatList.js'
import {fetchCats} from './actions/catActions.js'

class App extends Component {
  componentDidMount() {
  	this.props.fetchCats()
  }

  render() {
    return (
      <div>
        <h1>CatBook</h1>
        < CatList catPics={this.props.cats} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
	return {fetchCats: () => dispatch(fetchCats())}
}

export default connect(state => ({cats: state.cats}), mapDispatchToProps)(App)
