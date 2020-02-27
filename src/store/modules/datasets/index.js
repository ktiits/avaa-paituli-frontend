import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { API_URL, PATH_DATASETS } from '../../../constants'
import {
  getProducers,
  getDataByProducer,
  getScalesByData,
  getYearsByDataAndScale
} from './utils'

const initialState = {
  datasets: [],
  producers: [],
  selectedProducer: '',
  selectableData: [],
  selectedData: '',
  selectableScales: [],
  selectedScale: '',
  selectableYears: [],
  selectedYear: ''
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

const setDatasets = (state, action) => {
  state.datasets = action.payload
  state.producers = getProducers(action.payload)
}

const setSelectedProducer = (state, action) => {
  state.selectedProducer = action.payload
  state.selectableData = getDataByProducer(
    state.selectedProducer,
    state.datasets
  )
  state.selectedData = ''
  state.selectedScale = ''
  state.setSelectedYear = ''
}

const setSelectedData = (state, action) => {
  state.selectedData = action.payload
  state.selectableScales = getScalesByData(state.selectedData, state.datasets)
  state.selectedScale = ''
  state.selectedYear = ''
}

const setSelectedScale = (state, action) => {
  state.selectedScale = action.payload
  state.selectableYears = getYearsByDataAndScale(
    state.selectedData,
    state.selectedScale,
    state.datasets
  )
  state.selectedYear = ''
}

const setSelectedYear = (state, action) => {
  state.selectedYear = action.payload
}

const datasets = createSlice({
  name: 'datasets',
  initialState,
  reducers: {
    setDatasets,
    setSelectedProducer,
    setSelectedData,
    setSelectedScale,
    setSelectedYear
  }
})

export default datasets
