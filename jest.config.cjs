module.exports = {
  testEnvironment: 'jsdom',

  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },

  moduleFileExtensions: ['js', 'jsx'],

  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
  },
};