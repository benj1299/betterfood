// Store/Reducers/ConnexionReducer.js
const initialState = {connexionCompte:[],  isLoggedIn: false}
function toggleConnexion(state =initialState, action) {

  let nextState

  switch (action.type) {
    case 'TOGGLE_CONNEXION':
      if (action.value.connexEmail=== InscriptionData[0].email && action.value.connexPassword === InscriptionData[0].password) {
        nextState = {
          ...state,
          connexionCompte: [...state.connexionCompte, action.value,InscriptionData[0].name],
          isLoggedIn:true
        }
      }
      return nextState || state
    return nextState
  default:
    return state
  }
}

export default toggleConnexion
