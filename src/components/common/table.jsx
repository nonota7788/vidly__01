import React from "react";
import TableHead from "./tableHead";
import TableBody from "./tableBody";

const Table = ({ data, sortColum, colums, onSort }) => {
  return (
    <table className="table">
      <TableHead colums={colums} sortColum={sortColum} onSort={onSort} />
      <TableBody items={data} colums={colums} />
    </table>
  );
};

export default Table;
