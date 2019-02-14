export default {
  files: [
    'src/**/*spec.{js,jsx,ts,tsx}',
  ],
  sources: [
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  cache: true,
  concurrency: 5,
  failFast: true,
  failWithoutAssertions: true,
  verbose: false,
  compileEnhancements: false,
  require: [
    './config/jsdom.setup.js',
    './config/babel.register.js',
  ],
  babel: {
    extensions: [
      'js',
      'jsx',
      'ts',
      'tsx',
    ],
  },
};
