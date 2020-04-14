import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCats } from './actions/catActions';
import Loader from './Loader';

import CatList from './CatList';

class App extends Component {
  componentDidMount() {
    this.props.fetchCats();
  }

  render() {
    console.log(this.props.cats)
    return (
      <div>
        <h1>CatBook</h1>

        {this.props.loading && <Loader />}{this.props.catPics.length > 0 && <CatList catPics={this.props.catPics} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  catPics: state.cats,
  loading: state.loading
});

const mapDispatchToProps = dispatch => ({
  fetchCats: () => dispatch(fetchCats())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

