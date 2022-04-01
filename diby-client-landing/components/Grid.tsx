import Grid from "@mui/material/Grid"
import { styled } from "@mui/material/styles"

const GridContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    padding: "0 32px"
  },
  [theme.breakpoints.up("md")]: {
    padding: "0 40px"
  },
  [theme.breakpoints.up("lg")]: {
    padding: "0 120px"
  },
  [theme.breakpoints.up("xl")]: {
    padding: "0 396px"
  },
}))

export { GridContainer }