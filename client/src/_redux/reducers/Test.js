const initialState = {
  text: `omgomgogmogmg`
}

export default (state=initialState, action) => {
  switch(action.type) {
    case `UPDATE_TEXT`:
      return Object.assign({}, state, { text: action.update })
    default:
      return state
  }
}