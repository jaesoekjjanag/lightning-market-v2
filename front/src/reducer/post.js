const initialState = {
  mainPosts: []
}

export const LOAD_POSTS = "LOAD_POSTS";

export const loadPosts = (data) => ({
  type: LOAD_POSTS,
  data,
}
)


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        mainPosts: state.mainPosts.concat(action.data)
      }
    default:
      return state
  }
}

export default reducer