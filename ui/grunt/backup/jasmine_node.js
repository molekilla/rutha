module.exports = {
  options: {
    forceExit: true,
    match: '.',
    matchall: false,
    extensions: 'js',
    specNameMatcher: 'spec',
    // jUnit: {
    //   report: true,
    //   savePath : "./build/reports/jasmine/",
    //   useDotNotation: true,
    //   consolidate: true
    // }
  },
  all: ['spec/']
};