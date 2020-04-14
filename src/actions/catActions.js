// write and export your action creator function here

// * remember, thunk alters the behavior of action creator functions, allowing us to return a function that takes in dispatch. Inside this function we can execute async code, and, once resolved, we can use dispatch to update our store with the remote data *
export const fetchCats = () => {
  return dispatch => {
    dispatch({ type: "LOADING_CATS" });

    fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
      .then(res => res.json())
      .then(catsJSON => {
        // instead of logging here, call dispatch and send the cat JSON data to your store
        dispatch({ type: "ADD_CATS", cats: catsJSON.images })
      })
      .catch(error => console.log)
  }
};

// export function fetchAstronauts() {
//   return (dispatch) => {
//     dispatch({ type: 'START_ADDING_ASTRONAUTS_REQUEST' });
//     fetch('http://api.open-notify.org/astros.json')
//       .then(response => response.json())
//       .then(astronauts => dispatch({ type: 'ADD_ASTRONAUTS', astronauts }));
//   };
// }