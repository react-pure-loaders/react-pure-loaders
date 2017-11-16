module.exports = {
  "globals": {
    "ts-jest": {
      "tsConfigFile": "tsconfig.json"
    }
  },
  "transform": {
    "^.+\\.(ts|tsx)$": "./node_modules/ts-jest/preprocessor.js"
  },
  "testMatch": [
    "**/test/**/*.test.(ts|tsx|js)"
  ],
  "setupFiles": [
    "raf/polyfill",
    "./test/setup/enzyme.ts"
  ],
  snapshotSerializers: [
    "enzyme-to-json/serializer",
    "jest-glamor-react"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "clearMocks": true
};