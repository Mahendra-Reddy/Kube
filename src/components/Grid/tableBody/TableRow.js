import { withStyles } from "@material-ui/core";
import React from "react";
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
    height: "38px",
    "& td": {
      padding: "4px 8px 4px 8px !important",
    },
  },
});

export default withStyles(styles)(TableRow);
