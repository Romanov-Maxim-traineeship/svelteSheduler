import { configure } from "@storybook/svelte";

const req = require.context("../src/Components", true, /.stories.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
