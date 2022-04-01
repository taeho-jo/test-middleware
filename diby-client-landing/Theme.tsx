import { createTheme } from "@mui/material/styles"
import '@mui/material/styles';

const breakpoints = {
    xs: 0,
    sm: 0,
    md: 768,
    lg: 1280,
    xl: 1920,
}

const theme = createTheme({
  spacing: 1,
  palette: {
    primary: {
      main: "#3C3C46", // primary_darkgrey
    },
    white: {
      main: "#FFFFFF", // white
    },
    blue: {
      main: "#2878F0", // primary_blue
    },
    green: {
      main: "#A8FF69", // primary_green
    },
    cyan: {
      main: "#24E1D5", // primary_cyan
    }
  },
  breakpoints: { values: breakpoints },
  typography: {
    fontSize: 16,
    fontFamily: [
      "Pretendard",
      "-apple-system",
      "BlinkMacSystemFont",
      "system-ui",
      "Roboto",
      "'Helvetica Neue'",
      "'Segoe UI'",
      "'Apple SD Gothic Neo'",
      "'Noto Sans KR'",
      "'Malgun Gothic'",
      "sans-serif"
    ].join(','),
  }
})

export {
    theme, breakpoints
}