module.exports = {
  // When Jest hits a css import, it tries parse it like css is javascript which does not work
  // We get around this by mocking css files with empty javascript
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  modulePathIgnorePatterns: ['<rootDir>/__tests__/playwright/'],
};
