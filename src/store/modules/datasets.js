import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import * as R from 'ramda'

import { API_URL, PATH_DATASETS } from '../../constants'

const initialState = {
  datasets: [],
  producers: [],
  selectedProducer: '',
  selectableData: [],
  selectedData: ''
}

const setDatasets = (state, action) => {
  state.datasets = action.payload
  state.producers = extractProducers(action.payload)
  state.selectableData = extractDataByProducer(state.selectedProducer)(
    state.datasets
  )
}

const setSelectedProducer = (state, action) => {
  state.selectedProducer = action.payload
  state.selectableData = extractDataByProducer(state.selectedProducer)(
    state.datasets
  )
}

const setSelectedData = (state, action) => {
  state.selectedData = action.payload
}

const extractProducers = R.pipe(
  R.map(dataset => ({
    fi: dataset.org_fin,
    en: dataset.org_eng
  })),
  R.uniq,
  R.sortWith([R.ascend(R.prop('fi'))])
)

const extractDataByProducer = producer => {
  return R.pipe(
    R.filter(dataset => dataset.org_fin === producer),
    R.map(dataset => ({
      fi: dataset.name_fin,
      en: dataset.name_eng
    })),
    R.uniq,
    R.sortWith([R.ascend(R.prop('fi'))])
  )
}

export function fetchDatasets() {
  return dispatch => {
    return axios
      .get(API_URL + PATH_DATASETS)
      .then(response => {
        dispatch(datasets.actions.setDatasets(response.data))
      })
      .catch(error => {
        throw error
      })
  }
}

const datasets = createSlice({
  name: 'datasets',
  initialState,
  reducers: {
    setDatasets,
    setSelectedProducer,
    setSelectedData
  }
})

export default datasets
