const env = process.env;

module.exports = {
  tagFormat: 'v${version}',
  branches: [{name: 'master', channel: env.SEMATIC_CHANNEL}],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          {type: 'feat', release: 'patch'},
          {type: 'fix', release: 'patch'},
          {type: 'docs', scope: 'README.md', release: 'patch'},
          {type: 'style', release: 'patch'},
          {type: 'refactor', release: 'patch'},
          {type: 'perf', release: 'patch'},
          {type: 'test', release: 'patch'},
          {type: 'chore', release: 'patch'},
          {type: 'minor', release: 'minor'},
          {type: 'release', release: 'major'},
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md',
      },
    ],

    [
      '@semantic-release/npm',
      {
        npmPublish: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['docs/CHANGELOG.md', 'package.json', 'yarn.lock'],
        message:
          'chore(release): ***NO_CI*** ${nextRelease.version}\n\n${nextRelease.notes}',
      },
    ],
  ],
};
