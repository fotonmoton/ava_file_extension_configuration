const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.resolve(ROOT, 'dist');
const SRC = path.resolve(ROOT, 'src');
const NODE_MODULES = path.resolve(ROOT, 'node_modules');

module.exports = {
  ROOT,
  DIST,
  SRC,
  NODE_MODULES,
};
