import React from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import TileWMS from 'ol/source/TileWMS'
import { transform } from 'ol/proj'
import { register } from 'ol/proj/proj4'
import proj4 from 'proj4'

import './MapContainer.css'

export default class MapContainer extends React.Component {
  constructor(props) {
    super(props)

    // These have to be moved somewhere else. They declare the map projections
    proj4.defs(
      'EPSG:3857',
      '+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs'
    )
    proj4.defs(
      'EPSG:3067',
      '+proj=utm +zone=35 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
    )
    register(proj4)

    this.state = {
      center: transform([500000, 7200000], 'EPSG:3067', 'EPSG:3857'),
      zoom: 5
    }

    var osmLayer = new TileLayer({
      title: 'OSM',
      source: new TileWMS({
        url: 'http://ows.terrestris.de/osm/service?',
        // attributions: 'Background map: © <a target="_blank" href="http://ows.terrestris.de/dienste.html">terrestris</a>. Data: © <a target="_blank" href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
        params: {
          LAYERS: 'OSM-WMS',
          VERSION: '1.1.0'
        }
      }),
      opacity: 1.0,
      visible: true
    })

    this.map = new Map({
      target: this.refs.mapContainer,
      layers: [osmLayer],
      pixelRatio: 1,
      view: new View({
        center: this.state.center,
        zoom: this.state.zoom
      })
    })
  }

  updateMap() {
    this.map.getView().setCenter(this.state.center)
    this.map.getView().setZoom(this.state.zoom)
  }

  componentDidMount() {
    this.map.setTarget('mapContainer')

    // Listen to map changes
    this.map.on('moveend', () => {
      let center = this.map.getView().getCenter()
      let zoom = this.map.getView().getZoom()
      this.setState({ center, zoom })
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    let center = this.map.getView().getCenter()
    let zoom = this.map.getView().getZoom()
    if (center === nextState.center && zoom === nextState.zoom) return false
    return true
  }

  render() {
    this.updateMap()
    return <div id="mapContainer" ref="mapContainer"></div>
  }
}
