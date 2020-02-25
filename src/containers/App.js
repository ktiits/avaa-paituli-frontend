import React from "react"

import FormContainer from "./FormContainer"
import MapContainer from "./MapContainer"
import "./App.css"

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Paituli</p>
      </header>
      <FormContainer />
      <MapContainer />
    </div>
  )
}

export default App
