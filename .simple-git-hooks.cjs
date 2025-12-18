module.exports = {
  'pre-commit': 'npx lint-staged --allow-empty',
  'commit-msg': 'npx commitlint --edit ${1}',
};
