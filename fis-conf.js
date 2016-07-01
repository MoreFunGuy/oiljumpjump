fis.match('::packager', {
  postpackager: fis.plugin('loader', {
    // allInOne: true
  })
});


fis.match('**/index.less', {
  parser: fis.plugin('less'), // invoke `fis-parser-less`,
  rExt: '.css'
});

// css
fis.match('styles/(*.less)', {
  release: 'css/$1'
});
