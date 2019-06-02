// Store/Reducers/favoriteReducer.js

const initialState = { favoritesAliments: [] }
function toggleFavorite(state = initialState, action) {
  let nextState
  switch (action.type) {

    case 'TOGGLE_FAVORITE':
      for (i = 0; i < state.favoritesAliments.length; i++){
        if(action.value.productId1 == state.favoritesAliments[i].productId1){
            state.favoritesAliments[i].date = new Date();
            return nextState || state
        } 
      }   
      nextState = {
        ...state,
        favoritesAliments: [action.value, ...state.favoritesAliments]
      } 
      return nextState || state
  default:
    return state
  }
}
export default toggleFavorite
