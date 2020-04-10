const catsReducer = (state = {loading: false, cats: []}, action) => {
	switch (action.type) {
		case 'LOADING_CATS':
			return {loading: true, cats: [...state.cats]}
		case 'ADD_CATS':
			return {cats: action.cats, loading: false}
		default:
			return state
	}
}

export default catsReducer

// add the catsReducer