module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts'],
    testEnvironment: 'jsdom',
    transformIgnorePatterns: ['node_modules/(?!(jest-test))'],
    globals: {
      'ts-jest': {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
      },
    },
    moduleFileExtensions: ['ts', 'html', 'js', 'json'],
    transform: {
      '^.+\\.(ts|js|html)$': 'ts-jest',
    },
    moduleNameMapper: {
      'src/(.*)': '<rootDir>/src/$1',
    },
    testMatch: ['<rootDir>/src/**/*.spec.ts'],
  };
  