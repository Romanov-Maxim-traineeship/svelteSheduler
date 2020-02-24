import { storiesOf } from "@storybook/svelte";
import Card from "./";

storiesOf("Main Card", module).add("simple", () => ({
  Component: Card,
  props: { text: "Hello Button" },
}));
