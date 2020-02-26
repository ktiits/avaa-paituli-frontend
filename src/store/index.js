import { configureStore, combineReducers } from '@reduxjs/toolkit'

import datasets from './modules/datasets'

const rootReducer = combineReducers({
  datasets: datasets.reducer
})

const store = configureStore({
  reducer: rootReducer
})

export default store
