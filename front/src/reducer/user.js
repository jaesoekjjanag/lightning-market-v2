const initialState = {
  isLoggedIn: false,
  userInfo: null,
  posts: [],
  comments: [],

}

export const LOG_IN = "LOG_IN";
export const NICKNAME_CHANGE = "NICKNAME_CHANGE"
export const COMMENT_CHANGE = "COMMNET_CHANGE"
export const PROFILE_CHANGE = 'PROFILE_CHANGE'

export const logIn = (data) => {
  return {
    type: LOG_IN,
    id: data.id,
    email: data.email,
    profile: data.profile,
    nickname: data.nickname,
    comment: data.comment,
    createdAt: data.createdAt,
    posts: data.posts,
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
          profile: action.profile,
          nickname: action.nickname,
          comment: action.comment,
          createdAt: action.createdAt,
        },
        posts: [...state.posts].concat(action.posts)
      }
    case PROFILE_CHANGE:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          profile: action.profile,
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
    case COMMENT_CHANGE:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          comment: action.comment,
        }
      }
    default:
      return state;
  }
}

export default reducer;