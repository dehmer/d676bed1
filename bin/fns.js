const R = require('ramda')

const split = delimiter => s => s.split(delimiter)

module.exports = {
  split,
  splitCRLF: split(/\r?\n/),
  splitTAB: split(/\t/),
  assign: Object.assign,
  entries: Object.entries,
  fromEntries: Object.fromEntries,
  props: R.curry((ix, xs) => ix.map(i => xs[i]).join(''))
}