module.exports = {
  extends: ['@commitlint/config-conventional'],
  defaultIgnores: true,
  rules: {
    'references-empty': [2, 'never'],
    'subject-case': [0, 'never'],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['gcspa-'],
    },
  },
};
