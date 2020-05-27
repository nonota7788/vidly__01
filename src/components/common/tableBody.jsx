import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  rederCell(item, colum) {
    return colum.content ? colum.content(item) : _.get(item, colum.path);
  }

  render() {
    const { items, colums } = this.props;
    return (
      <tbody>
        {items.map((item) => (
          <tr key={item._id}>
            {colums.map((colum) => (
              <th key={colum.path || colum.key}>
                {this.rederCell(item, colum)}
              </th>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
