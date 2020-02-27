import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Select from './Select'
import datasets from '../store/modules/datasets'

export default function DatasetForm() {
  const producers = useSelector(state => state.datasets.producers)
  const selectedProducer = useSelector(state => state.datasets.selectedProducer)
  const selectableData = useSelector(state => state.datasets.selectableData)
  const selectedData = useSelector(state => state.datasets.selectedData)
  const selectableScales = useSelector(state => state.datasets.selectableScales)
  const selectedScale = useSelector(state => state.datasets.selectedScale)
  const selectableYears = useSelector(state => state.datasets.selectableYears)
  const selectedYear = useSelector(state => state.datasets.selectedYear)
  const dispatch = useDispatch()

  return (
    <div>
      <p>Select dataset</p>
      <form>
        <div>
          <Select
            value={selectedProducer}
            options={producers}
            placeholder="Select data producer"
            onChange={e =>
              dispatch(datasets.actions.setSelectedProducer(e.target.value))
            }
          />
        </div>
        <div>
          <Select
            value={selectedData}
            options={selectableData}
            placeholder="Select data"
            onChange={e =>
              dispatch(datasets.actions.setSelectedData(e.target.value))
            }
          />
        </div>
        <div>
          <Select
            value={selectedScale}
            options={selectableScales}
            placeholder="Select scale"
            onChange={e =>
              dispatch(datasets.actions.setSelectedScale(e.target.value))
            }
          />
        </div>
        <div>
          <Select
            value={selectedYear}
            options={selectableYears}
            placeholder="Select year"
            onChange={e =>
              dispatch(datasets.actions.setSelectedYear(e.target.value))
            }
          />
        </div>
      </form>
    </div>
  )
}
