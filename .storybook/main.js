module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  core: {
    builder: 'webpack5',
  },
  typescript: { reactDocgen: false },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    'storybook-addon-next',
    'storybook-addon-swc',
  ],
  framework: '@storybook/react',
}
