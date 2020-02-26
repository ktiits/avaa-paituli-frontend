import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import * as R from 'ramda'

import { API_URL, PATH_DATASETS } from '../../constants'

const datasets = createSlice({
  name: 'datasets',
  initialState: {
    producers: [],
    datasets: {}
  },
  reducers: {
    set: (state, action) => {
      state.producers = extractProducers(action.payload)
      state.datasets = extractDatasets(action.payload)
    },
    setProducer: (state, action) => {
      state.selectedProducer = action.payload
    }
  }
})

export function fetchDatasets() {
  return dispatch => {
    return axios
      .get(API_URL + PATH_DATASETS)
      .then(response => {
        dispatch(datasets.actions.set(response.data))
      })
      .catch(error => {
        throw error
      })
  }
}

const extractProducers = R.pipe(
  R.map(dataset => ({
    fi: dataset.org_fin,
    en: dataset.org_eng
  })),
  R.uniq,
  R.sortWith([R.ascend(R.prop('fi'))])
)

const extractDatasets = R.pipe(
  R.map(dataset => ({
    producer: dataset.org_fin,
    fi: dataset.name_fin,
    en: dataset.name_eng
  })),
  R.sortWith([R.ascend(R.prop('fi'))]),
  R.groupBy(R.prop('producer'))
)

export default datasets
