module.exports = {
  'extends': [
    './rules/best-practices',
    './rules/order',
    './rules/style',
    './rules/scss',
  ].map(require.resolve),
}
