import React, { Component } from "react";
import Table from "./common/table";
import Like from "./common/like";

class MoviesTable extends Component {
  colums = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (item) => (
        <Like onLike={() => this.props.onLike(item)} isLiked={item.isLiked} />
      ),
    },
    {
      key: "delete",
      content: (item) => (
        <button
          onClick={() => this.props.onDelete(item)}
          className="btn btn-danger"
        >
          Delete
        </button>
      ),
    },
  ];

  render() {
    const { movies, sortColum, onSort } = this.props;
    return (
      <Table
        data={movies}
        sortColum={sortColum}
        colums={this.colums}
        onSort={onSort}
      />
    );
  }
}

export default MoviesTable;
