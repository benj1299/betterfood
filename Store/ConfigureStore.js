import { createStore } from 'redux'
import toggleFavorite from './Reducers/favoriteReducer'
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
  key: 'root',
  storage: storage
}
export default createStore(persistCombineReducers(rootPersistConfig, {toggleFavorite}))
