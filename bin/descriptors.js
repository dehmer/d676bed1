const R = require('ramda')
const SIDC = require('./sidc')
const FNS = require('./fns')

const descriptorGeometry = (sidc, geometry, parameters) => {
  if (sidc.includes('G*F*AXS---*****')) return 'Sector' // single only
  else if (parameters?.layout === 'circle') return 'Circle'
  else if (parameters?.layout === 'rectangle') return 'Rectangle'
  else if (parameters?.layout === 'fan' && parameters.arc) return `Sector-${parameters.arc}`
  else if (parameters?.layout === 'fan' && parameters.maxPoints === 2) return 'Bearing'
  else if (parameters?.layout === 'fan' && parameters?.minPoints === 3 && parameters?.maxPoints === 3) return 'Sector'
  else if (parameters?.layout === 'corridor' && parameters.maxPoints === 2) return 'Corridor:2'
  else if (parameters?.layout === 'corridor') return 'Corridor'
  else if (parameters?.layout === 'beam-2') return 'MultiBearing:2'
  else if (parameters?.layout === 'seize') return 'Seize'
  else if (parameters?.layout === 'turn') return 'Turn'
  else if (parameters?.layout === 'orbit') return 'Orbit'
  else if (geometry === 'Point') return 'Point'
  else if (geometry === 'Polygon') return 'Polygon'
  else if (geometry === 'LineString' && parameters?.maxPoints === 2) return 'LineString:2'
  else if (geometry === 'LineString') return 'LineString'
}

module.exports = R.compose(
  FNS.fromEntries,
  R.map(([k, { geometry, parameters, ...rest }]) => [k, { ...rest, geometry: descriptorGeometry(k, geometry, parameters) }]),
  R.map(([k, v]) => [SIDC.generic(k), v]),
  FNS.entries,
  R.reduce((acc, { sidc, ...value }) => 
    R.tap(acc => (acc[sidc] = value))(acc), {}
  ),
)(require('./descriptors.json'))
