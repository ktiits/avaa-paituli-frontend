import { FETCH_DATASETS } from "./types"
import axios from "axios"

const apiUrl = "http://localhost:3000"

const fetchDatasetsSuccess = datasets => {
  return {
    type: FETCH_DATASETS,
    datasets
  }
}

export const fetchDatasets = () => {
  return dispatch => {
    return axios
      .get(apiUrl + "/getDatasets")
      .then(response => {
        dispatch(fetchDatasetsSuccess(response.data))
      })
      .catch(error => {
        throw error
      })
  }
}
