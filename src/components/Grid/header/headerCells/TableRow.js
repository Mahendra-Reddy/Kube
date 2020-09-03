import React from "react";
import { withStyles } from "@material-ui/core";
import MaterialTableRow from "@material-ui/core/TableRow";

const TableRow = ({ children, classes, ...otherProps }) => {
  return (
    <MaterialTableRow className={classes.root} {...otherProps}>
      {children}
    </MaterialTableRow>
  );
};

const styles = (theme) => ({
  root: {
    height: "28px",
  },
});


export default withStyles(styles)(TableRow)