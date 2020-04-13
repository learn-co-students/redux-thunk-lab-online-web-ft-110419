import React from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'
class App extends React.Component {

  componentDidMount() {
    this.props.fetchCats()
  }
  checkLoading = () => {
    if (this.props.loading) {
      return <div>Processing...</div>
    } else {
      return <CatList catPics={this.props.catPics} />
    }
  }
  render() {

    return (
      <div>
        <h1>CatBook</h1>
        {this.checkLoading()}
      </div>
    );
  }
}
const mapStatToProps = state => {
  console.log(state)
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mDTP = dispatch => {
  return { fetchCats: () => dispatch(fetchCats()) }
}
export default connect(mapStatToProps, mDTP)(App)

