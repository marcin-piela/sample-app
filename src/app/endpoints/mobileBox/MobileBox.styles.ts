import { makeStyles } from "@material-ui/core/styles";
import { flexbox } from "@material-ui/system";

export default makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3, 2),
    overflowX: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2),
    padding: theme.spacing(3, 3)
  },
  lockIcon: {
    fontSize: 14,
    verticalAlign: "middle",
    marginTop: -4,
    marginLeft: 4,
    color: "#a2a2a2"
  },
  enable: {
    color: "green",
    fontSize: 17
  },
  disable: {
    color: "#c34e4e",
    fontSize: 17
  },
  itemWrapper: {
    display: "flex",
    width: "100%",
    fontSize: 16,
    minHeight: 32,
    marginTop: 10
  },
  item: {
    display: "flex"
  },
  itemLabel: {
    width: "auto"
  },
  itemValue: {
    fontWeight: 700,
    marginLeft: 5
  },
  itemActive: {
    borderLeft: "3px solid green"
  },
  itemDisabled: {
    borderLeft: "3px solid #c34e4e"
  }
}));
