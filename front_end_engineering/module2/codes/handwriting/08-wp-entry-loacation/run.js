// let webpack = require('webpack')
let webpack = require('./myPack')
let options = require('./webpack.config')

let compiler = webpack(options)

compiler.run(function(err, stats) {
  console.log('err===>', err);
  // console.log('stats===>', stats.toJson({
  //   entries: true,
  //   chunks: false,
  //   modules: false,
  //   assetes: false
  // }));
})