// Store/Reducers/InscriptionRedux.js

const nouveauCompte  = {InscriptionCompte:[]}

function toggleInscription(state = nouveauCompte, action) {
  let nextState

  switch (action.type) {
    case 'TOGGLE_INSCRIPTION':
      return nextState || state
  default:
    return state
  }
}

export default toggleInscription
