import React from 'react'
import { Provider } from 'react-redux'

import Header from './components/Header'
import DatasetForm from './components/DatasetForm'
import MapContainer from './components/MapContainer'
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <DatasetForm />
        <MapContainer />
      </div>
    </Provider>
  )
}
