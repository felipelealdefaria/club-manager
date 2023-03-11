const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest');

module.exports = {
  forceExit: true,
  preset: 'ts-jest',
  roots: ['<rootDir>'],
  collectCoverage: true,
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/client/**/*.test.ts',
    '<rootDir>/src/client/**/__tests__/**/*.test.ts',
    '<rootDir>/src/server/**/*.test.ts',
    '<rootDir>/src/server/**/__tests__/**/*.test.ts',
  ],
  collectCoverageFrom: [
    '<rootDir>/src/client/**/*.ts',
    '<rootDir>/src/server/**/*.ts',
  ],
  globalSetup: './src/tests/jest.global.ts',
  setupFiles: ['./src/tests/jest.env-vars.ts'],
  setupFilesAfterEnv: ['./src/tests/jest.setup.ts'],
  testPathIgnorePatterns: ['/node_modules/', 'build'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),
};
