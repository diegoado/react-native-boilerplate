module.exports = {
  preset: 'react-native',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  setupFilesAfterEnv: [
    '<rootDir>/setup-tests.js',
    './node_modules/jest-enzyme/lib/index.js'
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: [
    'app/**/*.{js,jsx}',
    '!<rootDir>/android/',
    '!<rootDir>/ios/',
    '!<rootDir>/node_modules/'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 90,
      lines: 85,
      statements: 90
    }
  },
  coverageReporters: ['text'],
  transformIgnorePatterns: ['/node_modules/(?!react-native)/.+']
};
