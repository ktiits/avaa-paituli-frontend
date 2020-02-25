import * as R from "ramda"
import { FETCH_DATASETS } from "../actions/types"

const initialState = {
  producers: []
}

const datasets = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATASETS:
      return {
        producers: extractProducers(action.datasets)
      }
    default:
      return state
  }
}

const extractProducers = R.pipe(
  R.map(dataset => ({
    fi: dataset.org_fin,
    en: dataset.org_eng
  })),
  R.uniq,
  R.sortWith([R.ascend(R.prop("fi"))])
)

export default datasets
