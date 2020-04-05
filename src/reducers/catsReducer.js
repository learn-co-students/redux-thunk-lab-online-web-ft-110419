import { LOADING_CATS, ADD_CATS } from "../actions/catActions";

const initState = {
  cats: [],
  loading: false,
};

function catsReducer(state = initState, action) {
  switch (action.type) {
    case LOADING_CATS:
      return {
        ...state,
        cats: [...state.cats],
        loading: true,
      };
    case ADD_CATS:
      return {
        ...state,
        cats: action.cats,
        loading: false,
      };
    default:
      return state;
  }
}

export default catsReducer;
