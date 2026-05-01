// Rollup config to export the correct componation of bundles
import libBundles from './rollup.lib';
import workerBundles from './rollup.worker';
import coreTsBundles from './rollup.core';
import getCoreBundles from './rollup.getcore';

let exports = [];

if (!process.env.SKIP_LIB) {
  exports = [...getCoreBundles, ...workerBundles, ...libBundles];

  // Add TS Bundles
  if (process.env.TS) {
    exports = [...coreTsBundles, ...exports];
  }
}

if (process.env.DEBUGGER) {
  const { default: debuggerBundles } = require('./rollup.debugger');
  exports = [...exports, ...debuggerBundles];
}

if (process.env.BENCHMARK) {
  const { default: benchmarkBundles } = require('./rollup.benchmark');
  exports = [...exports, ...benchmarkBundles];
}

if (process.env.AMP) {
  const { default: ampBundles } = require('./rollup.amp');
  exports = [...exports, ...ampBundles];
}

if (process.env.IFRAME) {
  const { default: iframeBundles } = require('./rollup.iframe');
  exports = [...exports, ...iframeBundles];
}

export default exports;
