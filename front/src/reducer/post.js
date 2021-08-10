const initialState = {
  mainPosts: [],
  imagesName: [],
}

export const LOAD_POSTS = "LOAD_POSTS";
export const UPLOAD_IMAGES = "UPLOAD_IMAGES"
export const REMOVE_IMAGES = "REMOVE_IMAGES"

export const loadPosts = (data) => ({
  type: LOAD_POSTS,
  data,
}
)

export const uploadImages = (data) => ({
  type: UPLOAD_IMAGES,
  data, //파일명을 배열로 받아옴.
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS:
      return {
        ...state,
        mainPosts: state.mainPosts.concat(action.data)
      }
    case UPLOAD_IMAGES:
      return {
        ...state,
        imagesName: state.imagesName.concat(action.data)
      }
    case REMOVE_IMAGES:
      return {
        ...state,
        imagesName: [],
      }
    default:
      return state
  }
}

export default reducer