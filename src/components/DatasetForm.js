import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Select from './Select'
import datasets from '../store/modules/datasets'

export default function DatasetForm() {
  const producers = useSelector(state => state.datasets.producers)
  const selectedProducer = useSelector(state => state.datasets.selectedProducer)
  const selectableData = useSelector(state => state.datasets.selectableData)
  const selectedData = useSelector(state => state.datasets.selectedData)
  const dispatch = useDispatch()

  return (
    <div>
      <p>Select dataset</p>
      <form>
        <Select
          value={selectedProducer}
          options={producers}
          placeholder="Select data producer"
          onChange={e =>
            dispatch(datasets.actions.setSelectedProducer(e.target.value))
          }
        />
        <Select
          value={selectedData}
          options={selectableData}
          placeholder="Select data"
          onChange={e =>
            dispatch(datasets.actions.setSelectedData(e.target.value))
          }
        />
      </form>
    </div>
  )
}
