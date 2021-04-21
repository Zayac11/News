import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import newsReducer from "./news-reducer";
import authReducer from "./auth-reducer";
import infoSidebarReducer from "./info-sidebar-reducer";

let reducers = combineReducers({
    news: newsReducer,
    auth: authReducer,
    infoSidebar: infoSidebarReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
