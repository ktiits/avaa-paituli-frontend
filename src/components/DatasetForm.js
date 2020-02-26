import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchDatasets } from '../store/modules/datasets'
import datasets from '../store/modules/datasets'

export default function DatasetForm() {
  const producers = useSelector(state => state.datasets.producers)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDatasets())
  })

  return (
    <div>
      <p>Select dataset</p>
      <form>
        <select
          onChange={e => dispatch(datasets.actions.setProducer(e.target.value))}
        >
          <option value="">Select data producer</option>
          {producers.map(producer => (
            <option value={producer.fi}>{producer.fi}</option>
          ))}
        </select>
      </form>
    </div>
  )
}
