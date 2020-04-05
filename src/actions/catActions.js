const LOADING_CATS = "LOADING_CATS";
const ADD_CATS = "ADD_CATS";

function fetchCats() {
  return (dispatch) => {
    dispatch({ type: LOADING_CATS });
    fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
      .then((resp) => resp.json())
      .then((cats) => dispatch({ type: ADD_CATS, cats: cats.images }));
  };
}

export { LOADING_CATS, ADD_CATS, fetchCats };
