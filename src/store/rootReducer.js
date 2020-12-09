import { combineReducers } from "redux";

import titles from "./modules/title/titleReducer";
import user from "./modules/user/userReducer";

export default combineReducers({ titles, user });
