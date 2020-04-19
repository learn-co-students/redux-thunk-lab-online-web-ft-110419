import React, { Component } from 'react';
import CatList from './CatList';
import { fetchCats } from './actions/catActions'
import { connect } from 'react-redux';

class App extends Component {   

  componentDidMount(){
    this.props.fetchCats()
  }
  
  render() {
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}

export default connect (state => ({catPics: state.cats, loading: state.loading}), { fetchCats })(App)
