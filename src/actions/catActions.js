// write and export your action creator function here
const URL = 'https://learn-co-curriculum.github.io/cat-api/cats.json'

export const fetchCats = () => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_CATS'})
      fetch(URL)
        .then(res => {
          return res.json()
      })
        .then(resJSON => {
          dispatch({ type: 'ADD_CATS', cats: resJSON.images })
      })
    }
  }
