import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TableCell, TableRow } from "@material-ui/core";

export default makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3, 2),
    overflowX: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  table: {
    minWidth: 680
  },
  paper: {
    marginTop: theme.spacing(3),
    width: "100%",
    overflowX: "auto",
    marginBottom: theme.spacing(2),
    minWidth: 700
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
  }
}));

export const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#f7941e",
    color: theme.palette.common.white
  },
  body: {
    fontSize: 12
  }
}))(TableCell);

export const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    },
    "&:hover": {
      backgroundColor: "#fbf2e8"
    }
  }
}))(TableRow);
