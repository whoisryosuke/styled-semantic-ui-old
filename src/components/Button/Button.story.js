import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ThemeProvider } from "styled-components";
import theme from "../../theme/theme";

import Button from "./Button";

storiesOf("Button", module)
  .add("with text", () => (
    <ThemeProvider theme={theme}>
      <Button onClick={action("clicked")}>Hello Button</Button>
    </ThemeProvider>
  ))
  .add("active", () => (
    <ThemeProvider theme={theme}>
      <Button className="active" onClick={action("clicked")}>
        Active Button
      </Button>
    </ThemeProvider>
  ))
  .add("inverted", () => (
    <ThemeProvider theme={theme}>
      <Button className="inverted red" onClick={action("clicked")}>
        Inverted Button
      </Button>
    </ThemeProvider>
  ))
  .add("with some emoji", () => (
    <ThemeProvider theme={theme}>
      <Button onClick={action("clicked")}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    </ThemeProvider>
  ));
