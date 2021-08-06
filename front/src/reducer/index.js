import { combineReducers } from "redux";
import addressPopup from './addressPopup'
import loginPopup from './loginPopup'
import user from './user'


const rootReducer = combineReducers({
  addressPopup,
  loginPopup,
  user
})

export default rootReducer;