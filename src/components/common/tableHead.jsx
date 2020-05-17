import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TableHead extends Component {
  raiseSort(path) {
    const sortColum = { ...this.props.sortColum };
    if (path === sortColum.path) {
      sortColum.order = sortColum.order === "asc" ? "desc" : "asc";
    } else {
      sortColum.path = path;
      sortColum.order = "asc";
    }
    this.props.onSort(sortColum);
  }

  renderIcon(path) {
    const { sortColum } = this.props;
    const direction = sortColum.order === "asc" ? "up" : "down";
    if (path === sortColum.path)
      return <FontAwesomeIcon icon={`sort-${direction}`} />;
  }

  render() {
    const { colums } = this.props;
    return (
      <thead>
        <tr>
          {colums.map((colum) => (
            <th
              className="clickable"
              key={colum.path || colum.key}
              onClick={() => this.raiseSort(colum.path)}
            >
              {colum.label} {this.renderIcon(colum.path)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHead;
