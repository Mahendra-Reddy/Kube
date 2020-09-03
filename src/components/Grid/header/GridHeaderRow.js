import React from "react";
import { TableHead, withStyles } from "@material-ui/core";
import styles from "./headerCells/headerStyles";
import TableRow from './headerCells/TableRow';

const GridHeader = ({ children, classes }) => {
  return (
    <TableHead className={classes.headerHeight}>
      <TableRow>{children}</TableRow>
    </TableHead>
  );
};

export default withStyles(styles)(GridHeader, TableRow);
