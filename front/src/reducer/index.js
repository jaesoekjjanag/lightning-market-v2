import { combineReducers } from "redux";
import addressPopup from './addressPopup'
import loginPopup from './loginPopup'
import user from './user'
import post from './post'


const rootReducer = combineReducers({
  addressPopup,
  loginPopup,
  user,
  post,
})

export default rootReducer;