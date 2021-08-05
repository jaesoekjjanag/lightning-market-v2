import { combineReducers } from "redux";
import addressPopup from './addressPopup'
import loginPopup from './loginPopup'


const rootReducer = combineReducers({
  addressPopup,
  loginPopup
})

export default rootReducer;