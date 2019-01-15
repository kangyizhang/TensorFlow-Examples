// Load the tfjs-node binding
// import * as tf from '@tensorflow/tfjs-node';
var tf = require('@tensorflow/tfjs-node');
var tfc = require('./tf-converter');
global.fetch = require('node-fetch');

async function run() {
  const MODEL_PATH = 'file:///usr/local/google/home/kangyizhang/test/TensorFlow-Examples/examples/2_BasicModels/tmp/web_model/tensorflowjs_model.pb';
  const WEIGHTS_PATH = 'file:///usr/local/google/home/kangyizhang/test/TensorFlow-Examples/examples/2_BasicModels/tmp/web_model/weights_manifest.json';
  const model = await tfc.loadFrozenModel(MODEL_PATH, WEIGHTS_PATH);
  console.log(model.predict([]));
}

run().then(()=>console.log('Done'));
