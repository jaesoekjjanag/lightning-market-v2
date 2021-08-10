const initialState = {
  isLoggedIn: false,
  userInfo: null,
  posts: [],
  comments: [],

}

export const LOG_IN = "LOG_IN";
export const NICKNAME_CHANGE = "NICKNAME_CHANGE"

export const logIn = (data) => {
  return {
    type: LOG_IN,
    id: data.id,
    email: data.email,
    nickname: data.nickname,
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
          email: action.email,
          nickname: action.nickname,
        }
      }
    case NICKNAME_CHANGE:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          nickname: action.nickname,
        }
      }
    default:
      return state;
  }
}

export default reducer;