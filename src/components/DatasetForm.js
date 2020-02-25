import React from "react"
import { useSelector } from "react-redux"

const DatasetForm = () => {
  const producers = useSelector(state => state.datasets.producers)
  return (
    <div>
      <p>Select dataset</p>
      <select>
        <option value="">Select data producer</option>
        {producers.map(producer => (
          <option value="{producer.fi}">{producer.fi}</option>
        ))}
      </select>
    </div>
  )
}

export default DatasetForm
