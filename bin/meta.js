#!/usr/bin/env node
const fs = require('fs')
const R = require('ramda')
const FNS = require('./fns')
const SIDC = require('./sidc')
const ms2525 = require('./ms2525')
const { app6b } = require('./ms2525c')
const app6 = require('./app6')
const descriptors = require('./descriptors')

/**
 * mapWP :: (x[n] => x[n-1] => x[n]) => x
 * Map with previous entry.
 */
const mapWP = fn => {
  let previous
  return x => {
    fn(x, previous)
    previous = x
    return x
  }
}

// If empty, use entity and entity type from previous entry.
const fillgaps = ix => mapWP((x, p) => {
  p && ix.forEach(i => (x[i] = x[i] || p[i]))
  return x
})

// Insert point geometry column if necessary.
const insertGeometry = R.curry((n, i, xs) =>
  xs.length === n
    ? (xs.splice(i, 0, 'Point'), xs)
    : xs
)

// Predefined geometry types:
//   Point
//   MultiPoint 
//   LineString
//   MultiLineString
//   Polygon 
//   MultiPolygon
//   GeometryCollection # ordered JSON array

// Cardinalities
//   MultiPoint:n # exactly n points 
//   LineString:n # exactly n points 

// Additional/custom types
//   Rectangle => Polygon:4
//   Circle => MultiPoint:2
//   Corridor => [LineString, Point]
//   Corridor:2 => [LineString:2, Point]
//   Orbit => [LineString(:2), Point]
//   Sector => MultiPoint:3
//   Sector-330 => MultiPoint:2
//   Sector-338 => MultiPoint:2
//   Bearing => MultiPoint:2 # (ex. Fan)
//   MultiBearing:2

const geometry = (standard, sidc, geometry) => {
  const key = app6b[sidc] || sidc
  const mapped = descriptors[key]?.geometry
    ? descriptors[key].geometry
    : R.cond([
        [R.equals(''), R.always(undefined)],
        [R.equals('Point'), R.always('Point')],
        [R.equals('Point12'), R.always('Corridor:2')],
        [R.equals('Point17'), R.always('Rectangle')],
        [R.equals('Point18'), R.always('Sector')], // TODO: not really a sector
        [R.equals('POINT'), R.always('Point')],
        [R.equals('LINE'), R.always('LineString')],
        [R.equals('Line'), R.always('LineString')],
        [R.equals('POLYGON'), R.always('Polygon')],
        [R.equals('Area'), R.always('Polygon')],
        [R.T, () => {
          // FIXME: pending PR - https://github.com/spatialillusions/mil-std-2525/pull/18/commits/be8ef5199c404d4b10fc301dc2eab2c3c93def03
          console.log('unknown geometry', standard, sidc, geometry)
          R.always(undefined)
        }]
      ])(geometry)

  return mapped ? { geometry: mapped } : {}
}

const legacy = ({ standard }) => xs => {
  const sidc = SIDC.generic(`${FNS.props([2, 3, 4, 5, 6], xs)}*****`)
  return [
    `symbol+${standard}:${sidc}`,
    {
      hierarchy: xs[1].trim(),
      name: xs[7],
      remarks: xs[8],
      ...geometry(standard, sidc, xs[0])
    }
  ]
}

const current = ({ standard, symbolset }) => xs => {
  const sidc = `100*${symbolset}*000${FNS.props([4], xs)}0000`
  return [
    `symbol+${standard}:${sidc}`,
    {
      entity: xs[0],
      type: xs[1],
      subtype: xs[2],
      remarks: xs[5],
      ...geometry(standard, sidc, xs[3])
    }
  ]
}

/**
 * 2525-D: [Modifier, Category, Code, Remarks]
 * APP6-D: [Modifier, Code, Remarks]
 */
const modifier = 
  ({ standard, symbolset, sector }) => {
    const code = xs => standard === '2525+d' ? xs[2] : xs[1]
    return xs => [
      `modifier+${standard}:${symbolset}/${sector}/${code(xs)}`,
      standard === '2525+d' 
        ? { modifier: xs[0], category: xs[1], remarks: xs[3] }
        : { modifier: xs[0], remarks: xs[2] }
    ]
  }

const isLegacy = ({ standard }) => 
  ['2525+b', '2525+c', 'app6+b'].includes(standard)

const collect = R.cond([
  [R.prop('sector'), modifier],
  [isLegacy, legacy],
  [R.T, current]
])

// Remove falsy value properties.
const purge = 
  (([k, v]) => 
    [k, FNS.fromEntries(FNS.entries(v).filter(([, v]) => v))])

const entry = context => R.compose(
  purge,
  collect(context),
  isLegacy(context) ? insertGeometry(8, 0) : insertGeometry(5, 3),
  isLegacy(context) ? R.identity : fillgaps([0, 1]) // entity, entity type
)

// Filter unwanted sector modifier entries:
const whitelist = xs => {
  const regex = /(Version Extension Flag)|({?Reserved for future use}?)/i
  return !(regex.test(xs[0]))
}

const parse = context => R.compose(
  FNS.fromEntries,
  R.map(entry(context)),
  R.filter(whitelist),
  R.map(FNS.splitTAB),
  R.filter(xs => xs.length !== 0), // drop empty lines
  R.drop(1), // drop column headers
  FNS.splitCRLF,
  filename => fs.readFileSync(filename, 'utf8')
)(context.filename)

const json = [...ms2525, ...app6]
  .flatMap(parse)
  .reduce((a, b) => FNS.assign(a, b), {})

// console.log(JSON.stringify(json))
