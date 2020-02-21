import { FETCH_DATASETS } from '../actions/types'

const datasets = (state = [], action) => {
    switch (action.type) {
        case FETCH_DATASETS:
            return action.datasets
        default:
            return state
    }
  }
  
export default datasets
