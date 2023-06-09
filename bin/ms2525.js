const path = require('path')
const R = require('ramda')

const filename = s => path.join(process.cwd(), 'node_modules/mil-std-2525/tsv-tables', s)

module.exports = [
  { standard: '2525+b', filename: filename('2525b-change2/air.tsv') },
  { standard: '2525+b', filename: filename('2525b-change2/ground.tsv') },
  { standard: '2525+b', filename: filename('2525b-change2/mootw.tsv') },
  { standard: '2525+b', filename: filename('2525b-change2/sea-surface.tsv') },
  { standard: '2525+b', filename: filename('2525b-change2/signals-intelligence.tsv') },
  { standard: '2525+b', filename: filename('2525b-change2/sof.tsv') },
  { standard: '2525+b', filename: filename('2525b-change2/space.tsv') },
  { standard: '2525+b', filename: filename('2525b-change2/sub-surface.tsv') },
  { standard: '2525+b', filename: filename('2525b-change2/tactical-graphics.tsv') },

  { standard: '2525+c', filename: filename('2525c/air.tsv') },
  { standard: '2525+c', filename: filename('2525c/emergency-management.tsv') },
  { standard: '2525+c', filename: filename('2525c/ground-installation.tsv') },
  { standard: '2525+c', filename: filename('2525c/ground-unit.tsv') },
  { standard: '2525+c', filename: filename('2525c/sea-surface.tsv') },
  { standard: '2525+c', filename: filename('2525c/signals-intelligence.tsv') },
  { standard: '2525+c', filename: filename('2525c/sof.tsv') },
  { standard: '2525+c', filename: filename('2525c/stability-operations.tsv') },
  { standard: '2525+c', filename: filename('2525c/sub-surface.tsv') },
  { standard: '2525+c', filename: filename('2525c/tactical-graphics.tsv') },

  { standard: '2525+d', symbolset: '40', filename: filename('2525d/Activities.tsv') },
  { standard: '2525+d', symbolset: '40', filename: filename('2525d/Activities sector 1.tsv'), sector: 1 },
  { standard: '2525+d', symbolset: '40', filename: filename('2525d/Activities sector 2.tsv'), sector: 2 },
  { standard: '2525+d', symbolset: '02', filename: filename('2525d/Air missile.tsv') },
  { standard: '2525+d', symbolset: '02', filename: filename('2525d/Air missile sector 1.tsv'), sector: 1 },
  { standard: '2525+d', symbolset: '02', filename: filename('2525d/Air missile sector 2.tsv'), sector: 2 },
  { standard: '2525+d', symbolset: '01', filename: filename('2525d/Air.tsv') },
  { standard: '2525+d', symbolset: '01', filename: filename('2525d/Air sector 1.tsv'), sector: 1 },
  { standard: '2525+d', symbolset: '01', filename: filename('2525d/Air sector 2.tsv'), sector: 2 },
  { standard: '2525+d', symbolset: '25', filename: filename('2525d/Control Measures.tsv') },
  { standard: '2525+d', symbolset: '25', filename: filename('2525d/Control Measures sector 1.tsv'), sector: 1 },
  { standard: '2525+d', symbolset: '60', filename: filename('2525d/Cyberspace.tsv') },
  { standard: '2525+d', symbolset: '11', filename: filename('2525d/Land civilian.tsv') },
  { standard: '2525+d', symbolset: '11', filename: filename('2525d/Land civilian sector 1.tsv'), sector: 1 },
  { standard: '2525+d', symbolset: '11', filename: filename('2525d/Land civilian sector 2.tsv'), sector: 2 },
  { standard: '2525+d', symbolset: '15', filename: filename('2525d/Land equipment.tsv') },
  { standard: '2525+d', symbolset: '15', filename: filename('2525d/Land equipment sector 1.tsv'), sector: 1 },
  { standard: '2525+d', symbolset: '15', filename: filename('2525d/Land equipment sector 2.tsv'), sector: 2 },
  { standard: '2525+d', symbolset: '20', filename: filename('2525d/Land installation.tsv') },
  { standard: '2525+d', symbolset: '20', filename: filename('2525d/Land installation sector 1.tsv'), sector: 1 },
  { standard: '2525+d', symbolset: '20', filename: filename('2525d/Land installation sector 2.tsv'), sector: 2 },
  { standard: '2525+d', symbolset: '10', filename: filename('2525d/Land unit.tsv') },
  { standard: '2525+d', symbolset: '10', filename: filename('2525d/Land unit sector 1.tsv'), sector: 1 },
  { standard: '2525+d', symbolset: '10', filename: filename('2525d/Land unit sector 2.tsv'), sector: 2 },
  { standard: '2525+d', symbolset: '36', filename: filename('2525d/Mine warfare.tsv') },
  { standard: '2525+d', symbolset: '35', filename: filename('2525d/Sea subsurface.tsv') },
  { standard: '2525+d', symbolset: '35', filename: filename('2525d/Sea subsurface sector 1.tsv'), sector: 1 },
  { standard: '2525+d', symbolset: '35', filename: filename('2525d/Sea subsurface sector 2.tsv'), sector: 2 },
  { standard: '2525+d', symbolset: '30', filename: filename('2525d/Sea surface.tsv') },
  { standard: '2525+d', symbolset: '30', filename: filename('2525d/Sea surface sector 1.tsv'), sector: 1 },
  { standard: '2525+d', symbolset: '30', filename: filename('2525d/Sea surface sector 2.tsv'), sector: 2 },

  // For whatever reason SIGINT is duplicated in symbol sets 50, 51, 52, 53 and 54:
  ...R.range(50, 55).flatMap(symbolset => [
    { standard: '2525+d', symbolset, filename: filename('2525d/Signals intelligence.tsv') },
    { standard: '2525+d', symbolset, filename: filename('2525d/Signals intelligence sector 1.tsv'), sector: 1 },
    { standard: '2525+d', symbolset, filename: filename('2525d/Signals intelligence sector 2.tsv'), sector: 2 },
  ]),

  { standard: '2525+d', symbolset: '06', filename: filename('2525d/Space missile.tsv') },
  { standard: '2525+d', symbolset: '06', filename: filename('2525d/Space missile sector 1.tsv'), sector: 1 },
  { standard: '2525+d', symbolset: '06', filename: filename('2525d/Space missile sector 2.tsv'), sector: 2 },
  { standard: '2525+d', symbolset: '05', filename: filename('2525d/Space.tsv') },
  { standard: '2525+d', symbolset: '05', filename: filename('2525d/Space sector 1.tsv'), sector: 1 },
  { standard: '2525+d', symbolset: '05', filename: filename('2525d/Space sector 2.tsv'), sector: 2 }
]
