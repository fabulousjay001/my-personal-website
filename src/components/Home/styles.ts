import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useHomeStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(12.5),
  },
 
}));