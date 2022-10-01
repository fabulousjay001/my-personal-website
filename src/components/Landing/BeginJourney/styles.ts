import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useBeginJourneyStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.design.colors.primary900,
    marginBottom: theme.spacing(12.5),
  },
  // heading: {
  //   fontSize: theme.typography.fontSize + 28,
  //   color: theme.design.colors.white,
  //   marginBottom: theme.spacing(3),
  //   fontFamily: theme.design.font.dmSans,
  //   textAlign: "center",
  //   [theme.breakpoints.down("sm")]: {
  //     fontSize: theme.typography.fontSize + 16,
  //   },
  // },
  // content: {
  //   display: "flex",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   position: "absolute",
  // },
  // btn: {
  //   backgroundColor: theme.design.colors.primary900,
  //   border: `solid 1px ${theme.design.colors.white}`,

  //   padding: theme.spacing(0.75, 4),
  //   fontSize: theme.typography.fontSize + 4,
    
  //   textTransform: "none",
  //   lineHeight: "24px",
  //   "&:hover": {
     
  //     boxShadow: "none",
  //   },
  //   [theme.breakpoints.down("sm")]: {
  //     fontSize: theme.typography.fontSize + 2,
  //     padding: theme.spacing(0.5, 4),
  //   },
  // },
  // img: {
  //   height: "232px",
  //   width: "100%",
  // },
}));