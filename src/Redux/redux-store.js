import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./Reducers/auth-reducer";
import dialogsReducer from "./Reducers/dialogs-Reducer";
import profileReducer from "./Reducers/profile-Reducer";
import sidebarReducer from "./Reducers/sidebar-Reducer";
import usersReducer from "./Reducers/usersReducer";
import thunkMiddleware from "redux-thunk"
let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
});
let store = createStore(reducers,applyMiddleware(thunkMiddleware));
export default store;
