import {combineReducers, createStore} from "redux";
import {Reducer} from "../reducers/reducer";


const rootReducer = combineReducers({
      table:Reducer
})

export const store = createStore(rootReducer)

export type AppStoreType = ReturnType<typeof rootReducer>