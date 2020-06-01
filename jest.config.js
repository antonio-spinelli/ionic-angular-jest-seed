// https://github.com/thymikee/jest-preset-angular#brief-explanation-of-config

const tsJestPreset = require('jest-preset-angular/jest-preset').globals[
  'ts-jest'
]
const esModules = ['jest-test', '@ionic'].join('|')

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['src'],
  coverageDirectory: 'coverage',
  coverageReporters: ['html'],
  setupFilesAfterEnv: ['<rootDir>/tests/setup-jest.ts'],
  moduleNameMapper: {
    '@app/(.*)': '<rootDir>/src/app/$1',
    '@env': '<rootDir>/src/environments/environment',
    '@tests/(.*)': '<rootDir>/tests/$1',
  },
  // Do not ignore librairies such as ionic, ionic-native or bootstrap to transform them during unit testing.
  transformIgnorePatterns: [`node_modules/(?!(${esModules}))`],
  globals: {
    'ts-jest': {
      ...tsJestPreset,
      tsConfig: 'tsconfig.spec.json',
    },
  },
}
