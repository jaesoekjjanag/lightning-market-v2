const initState = {
  isPopUp: false,
}

export const POPUP = 'POPUP'
export const CLOSE = 'CLOSE'

const reducer = (state = initState, action) => {
  switch (action.type) {
    case POPUP:
      return {
        ...state,
        isPopUp: true,
      }
    case CLOSE:
      return {
        ...state,
        isPopUp: false
      }
    default:
      return state
  }
}

export default reducer