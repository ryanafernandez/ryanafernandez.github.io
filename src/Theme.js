import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
// const dark = "#e0e2db";
// const light = "#e0e2db";
const dark = "#fff";
const light = "#fff";

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode(light, dark)(props)
      }
    })
  }
});

export default theme;