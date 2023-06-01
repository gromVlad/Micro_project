import { applyMiddleware, combineReducers, createStore } from "redux";
import { reduserCount } from "./reduser_count";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  stateCount: reduserCount,
});


export const store = createStore(rootReducer, applyMiddleware(thunk));


export type AppStateType = ReturnType<typeof rootReducer>;


// @ts-ignore
window.store = store;
