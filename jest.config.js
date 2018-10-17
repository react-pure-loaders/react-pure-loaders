module.exports = {
  globals: {
    'ts-jest': {
      isolatedModules: true,
      tsConfig: 'tsconfig.json',
    },
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: [
    '**/test/**/*.test.(ts|tsx|js)',
  ],
  setupFiles: [
    'raf/polyfill',
    './test/setup/enzyme.ts',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
    'jest-glamor-react',
  ],
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
  ],
  clearMocks: true,
  preset: 'ts-jest',
}
