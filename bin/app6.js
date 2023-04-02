const path = require('path')

const filename = s => path.join(process.cwd(), 'node_modules/stanag-app6/tsv-tables', s)

module.exports = [
  { standard: 'app6+b', filename: filename('app6b/air.tsv') },
  { standard: 'app6+b', filename: filename('app6b/ground-equipment.tsv') },
  { standard: 'app6+b', filename: filename('app6b/ground-installation.tsv') },
  { standard: 'app6+b', filename: filename('app6b/ground-unit.tsv') },
  { standard: 'app6+b', filename: filename('app6b/sea-surface.tsv') },
  { standard: 'app6+b', filename: filename('app6b/sof.tsv') },
  { standard: 'app6+b', filename: filename('app6b/space.tsv') },
  { standard: 'app6+b', filename: filename('app6b/sub-surface.tsv') },
  { standard: 'app6+b', filename: filename('app6b/tactical-graphics.tsv') },

  { standard: 'app6+d', symbolset: '40', filename: filename('app6d/Activities.tsv') },
  { standard: 'app6+d', symbolset: '40', filename: filename('app6d/Activities sector 1.tsv'), sector: 1 },
  { standard: 'app6+d', symbolset: '02', filename: filename('app6d/Air missile.tsv') },
  { standard: 'app6+d', symbolset: '02', filename: filename('app6d/Air missile sector 1.tsv'), sector: 1 },
  { standard: 'app6+d', symbolset: '02', filename: filename('app6d/Air missile sector 2.tsv'), sector: 2 },
  { standard: 'app6+d', symbolset: '01', filename: filename('app6d/Air.tsv') },
  { standard: 'app6+d', symbolset: '01', filename: filename('app6d/Air sector 1.tsv'), sector: 1 },
  { standard: 'app6+d', symbolset: '01', filename: filename('app6d/Air sector 2.tsv'), sector: 2 },
  { standard: 'app6+d', symbolset: '25', filename: filename('app6d/Control Measures.tsv') },
  { standard: 'app6+d', symbolset: '01', filename: filename('app6d/Dismounted individual.tsv') },
  { standard: 'app6+d', symbolset: '01', filename: filename('app6d/Dismounted individual sector 1.tsv'), sector: 1 },
  { standard: 'app6+d', symbolset: '01', filename: filename('app6d/Dismounted individual sector 2.tsv'), sector: 2 },
  { standard: 'app6+d', symbolset: '11', filename: filename('app6d/Land civilian.tsv') },
  { standard: 'app6+d', symbolset: '11', filename: filename('app6d/Land civilian sector 1.tsv'), sector: 1 },
  { standard: 'app6+d', symbolset: '11', filename: filename('app6d/Land civilian sector 2.tsv'), sector: 2 },
  { standard: 'app6+d', symbolset: '15', filename: filename('app6d/Land equipment.tsv') },
  { standard: 'app6+d', symbolset: '15', filename: filename('app6d/Land equipment sector 1.tsv'), sector: 1 },
  { standard: 'app6+d', symbolset: '20', filename: filename('app6d/Land installation.tsv') },
  { standard: 'app6+d', symbolset: '20', filename: filename('app6d/Land installation sector 1.tsv'), sector: 1 },
  { standard: 'app6+d', symbolset: '20', filename: filename('app6d/Land installation sector 2.tsv'), sector: 2 },
  { standard: 'app6+d', symbolset: '10', filename: filename('app6d/Land unit.tsv') },
  { standard: 'app6+d', symbolset: '10', filename: filename('app6d/Land unit sector 1.tsv'), sector: 1 },
  { standard: 'app6+d', symbolset: '10', filename: filename('app6d/Land unit sector 2.tsv'), sector: 2 },
  { standard: 'app6+d', symbolset: '36', filename: filename('app6d/Mine warfare.tsv') },
  { standard: 'app6+d', symbolset: '35', filename: filename('app6d/Sea subsurface.tsv') },
  { standard: 'app6+d', symbolset: '35', filename: filename('app6d/Sea subsurface sector 1.tsv'), sector: 1 },
  { standard: 'app6+d', symbolset: '35', filename: filename('app6d/Sea subsurface sector 2.tsv'), sector: 2 },
  { standard: 'app6+d', symbolset: '30', filename: filename('app6d/Sea surface.tsv') },
  { standard: 'app6+d', symbolset: '30', filename: filename('app6d/Sea surface sector 1.tsv'), sector: 1 },
  { standard: 'app6+d', symbolset: '30', filename: filename('app6d/Sea surface sector 2.tsv'), sector: 2 },
  { standard: 'app6+d', symbolset: '05', filename: filename('app6d/Space.tsv') },
  { standard: 'app6+d', symbolset: '05', filename: filename('app6d/Space sector 1.tsv'), sector: 1 },
  { standard: 'app6+d', symbolset: '05', filename: filename('app6d/Space sector 2.tsv'), sector: 2 }
]