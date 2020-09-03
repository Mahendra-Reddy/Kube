import React from "react";
import { withStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";

const TableWrapper = ({ children, classes }) => {
  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table className={classes.table}>{children}</Table>
      </div>
    </Paper>
  );
};

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: "auto",
  },
});

export default withStyles(styles)(TableWrapper);
