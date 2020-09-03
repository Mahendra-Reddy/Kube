import React from "react";
import TableWrapper from "../components/Grid/TableWrapper";
import GridHeaderRow from "../components/Grid/header/GridHeaderRow";
import HeaderCell from "../components/Grid/header/headerCells/HeaderCell";
import TableRow from "../components/Grid/tableBody/TableRow";
import { TableCell, Button } from "@material-ui/core";

const data = [
  {
    status: "",
    test: "Test",
    days: "12 days ago",
    images: "lkas-rtyuirtyu-asdfgh",
    cpu: "0.5",
    memory: "1.0Gi",
    volume: ":",
  },
  {
    status: "",
    test: "Test",
    days: "12 days ago",
    images: "lkas-rtyuirtyu-asdfgh",
    cpu: "0.5",
    memory: "1.0Gi",
    volume: ":",
  },
  {
    status: "",
    test: "Test",
    days: "12 days ago",
    images: "lkas-rtyuirtyu-asdfgh",
    cpu: "0.5",
    memory: "1.0Gi",
    volume: ":",
  },
  {
    status: "",
    test: "Test",
    days: "12 days ago",
    images: "lkas-rtyuirtyu-asdfgh",
    cpu: "0.5",
    memory: "1.0Gi",
    volume: ":",
  },
  {
    status: "",
    test: "Test",
    days: "12 days ago",
    images: "lkas-rtyuirtyu-asdfgh",
    cpu: "0.5",
    memory: "1.0Gi",
    volume: ":",
  },
];

const Grid = () => {
  return (
    <>
      <TableWrapper>
        <Header />
        {data.map((item) => (
          <Row {...item} />
        ))}
      </TableWrapper>
    </>
  );
};

const Header = () => {
  return (
    <GridHeaderRow>
      <HeaderCell label="Status" />
      <HeaderCell label="Name" />
      <HeaderCell label="Age" />
      <HeaderCell label="Image" />
      <HeaderCell label="CPU" />
      <HeaderCell label="Memory" />
      <HeaderCell label="Volumes" />
      <HeaderCell />
      <HeaderCell />
    </GridHeaderRow>
  );
};

const Row = (data) => {
  if (!data) {
    return null;
  }
  return (
    <TableRow hover tabIndex={-1}>
      <TableCell></TableCell>
      <TableCell>{data.test}</TableCell>
      <TableCell>{data.days}</TableCell>
      <TableCell>{data.images}</TableCell>
      <TableCell>{data.cpu}</TableCell>
      <TableCell>{data.memory}</TableCell>
      <TableCell>{data.volume}</TableCell>
      <TableCell>
        <Button>Connect</Button>
      </TableCell>
      <TableCell>Icon</TableCell>
    </TableRow>
  );
};

export default Grid;
