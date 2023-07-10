import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";

import contentReducer from "./content-reducer/content-reducer";
import headerReducer from "./header-reducer";
import sidebarReducer from "./sidebar-reducer";
import authReducer from "./auth-reducer";
import reduxMiddlewear from "redux-thunk";
import appReducer from "./app-reducer";

let reducers = combineReducers({
     header: headerReducer,
     content: contentReducer,
     sidebar: sidebarReducer,
     auth: authReducer,
     app: appReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(reduxMiddlewear)
));
export default store;

