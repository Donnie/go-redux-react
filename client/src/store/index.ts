import { createStore } from 'redux'
import searchReducer from './reducers/search'

export const store = createStore(searchReducer)
