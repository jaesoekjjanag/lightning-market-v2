const initialState = {
  isLoggedIn: false,
  userInfo: null,
}

export const LOG_IN = "LOG_IN";

export const logIn = (data) => {
  return {
    type: LOG_IN,
    id: data.id
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isLoggedIn: true,
        userInfo: {
          ...state.userInfo,
          id: action.id,
        }
      }

    default:
      return state;
  }
}

export default reducer;