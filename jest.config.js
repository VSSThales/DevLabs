module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
  moduleNameMapper: {
    '^@testing-library/jest-dom$': '<rootDir>/node_modules/@testing-library/jest-dom',
  },
};