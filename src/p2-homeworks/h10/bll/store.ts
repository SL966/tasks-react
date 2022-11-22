import {loadingReducer} from './loadingReducer'
import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import {homeWorkReducer} from "../../h8/bll/homeWorkReducer";

const rootReducer = combineReducers({
    loading: loadingReducer,
    homeWork: homeWorkReducer

})

const store = configureStore({reducer: rootReducer});

export default store

export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store
