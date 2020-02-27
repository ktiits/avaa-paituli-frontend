import * as R from 'ramda'

export function getProducers(datasets) {
  return R.pipe(
    R.map(dataset => ({
      fi: dataset.org_fin,
      en: dataset.org_eng
    })),
    R.uniq,
    R.sortWith([R.ascend(R.prop('fi'))])
  )(datasets)
}

export function getDataByProducer(producer, datasets) {
  return R.pipe(
    R.filter(dataset => dataset.org_fin === producer),
    R.map(dataset => ({
      fi: dataset.name_fin,
      en: dataset.name_eng
    })),
    R.uniq,
    R.sortWith([R.ascend(R.prop('fi'))])
  )(datasets)
}

export function getScalesByData(data, datasets) {
  return R.pipe(
    R.filter(dataset => dataset.name_fin === data),
    R.map(dataset => ({
      fi: dataset.scale
    })),
    R.uniq,
    R.sortWith([R.ascend(R.prop('fi'))])
  )(datasets)
}

export function getYearsByDataAndScale(data, scale, datasets) {
  return R.pipe(
    R.filter(dataset => dataset.name_fin === data && dataset.scale === scale),
    R.map(dataset => ({
      fi: dataset.year
    })),
    R.uniq,
    R.sortWith([R.ascend(R.prop('fi'))])
  )(datasets)
}
