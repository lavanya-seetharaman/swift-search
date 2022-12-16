import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { themeReducer } from "./Slice";
import { 
    persistStore, 
    persistReducer, 
} from 'redux-persist';
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    mode : themeReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer : persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)
