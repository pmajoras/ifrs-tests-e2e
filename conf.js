exports.config = {
  defaultTimeoutInterval: 25000,
  getPageTimeout: 60000,
  allScriptsTimeout: 500000,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    'browserName': 'chrome',
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',

  specs: [
    'features/viewUsers.feature'
  ],

  baseURL: 'http://localhost:3000',

  cucumberOpts: {
    format: ['json:reports/results.json', 'pretty'],
    require: ['features/steps_definitions/*steps.js', 'support/env.js'],
    profile: false,
    'no-source': true
  }
};
