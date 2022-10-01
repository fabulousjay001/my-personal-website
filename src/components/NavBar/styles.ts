import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useNavBarStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  container: {},
}));
