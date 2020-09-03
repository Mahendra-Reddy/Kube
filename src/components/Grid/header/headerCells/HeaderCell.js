import React from "react";
import { withStyles } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import headerStyle from "./headerStyles";

const HeaderCell = ({ classes, label }) => (
  <TableCell className={classes.head}>{label}</TableCell>
);

export default withStyles(headerStyle)(HeaderCell);
