/* eslint-disable no-undef */
module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current',
          },
        },
      ],
      '@babel/preset-react'
    ],
    plugins: [
      [
        "@babel/plugin-proposal-class-properties", { "loose": true }
      ]
    ]
  };