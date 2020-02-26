import React from 'react'
import { Provider } from 'react-redux'

import Header from './components/Header'
import DatasetForm from './components/DatasetForm'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <DatasetForm />
      </div>
    </Provider>
  )
}
