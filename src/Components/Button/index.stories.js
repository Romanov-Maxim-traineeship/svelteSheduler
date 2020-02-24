import { storiesOf } from "@storybook/svelte";
import Button from "./";

storiesOf("Button", module).add("with text", () => ({
  Component: Button,
  props: { text: "Hello Button" },
}));
