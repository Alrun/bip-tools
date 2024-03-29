module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/preset-create-react-app',
        'storybook-dark-mode'
    ],
    framework: '@storybook/react',
    core: {
        builder: 'webpack5'
    },
    staticDirs: ['../public']
};
