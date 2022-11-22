import {loadingReducer} from './loadingReducer'
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    loading: loadingReducer,

})

const store = configureStore({reducer: rootReducer});

export default store

export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
