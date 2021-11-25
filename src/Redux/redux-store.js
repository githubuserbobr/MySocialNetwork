import { combineReducers, createStore } from "redux";
import authReducer from "./Reducers/auth-reducer";
import dialogsReducer from "./Reducers/dialogs-Reducer";
import profileReducer from "./Reducers/profile-Reducer";
import sidebarReducer from "./Reducers/sidebar-Reducer";
import usersReducer from "./Reducers/usersReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});
let store = createStore(reducers);
export default store;
