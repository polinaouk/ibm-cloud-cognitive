/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

const {
  env: { BABEL_ENV },
} = process;

module.exports = () => ({
  presets: [
    [
      '@babel/preset-env',
      {
        ...(BABEL_ENV && { modules: BABEL_ENV === 'cjs' && 'commonjs' }),
        targets: {
          browsers: ['extends browserslist-config-carbon'],
          node: '12',
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: true,
      },
    ],
  ],
});
