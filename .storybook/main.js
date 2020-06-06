module.exports = {
  stories: ["../src/**/*.storybook-mocks.js", "../src/**/*.storybook-mocks.tsx"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-actions/register",
  ],
};
