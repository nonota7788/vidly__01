import React, { Component } from "react";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../util/paginate";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    itemsPerPage: 4,
    sortColum: {
      path: "title",
      order: "asc",
    },
  };

  style = {
    margin: 20,
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (m) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(m);
    movies[index] = { ...movies[index] };
    movies[index].isLiked = !movies[index].isLiked;

    this.setState({ movies });
  };

  handlePageChange = (page, totalPage) => {
    if (page >= 1 && page <= totalPage) this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColum) => {
    this.setState({ sortColum });
  };

  getPagedData() {
    const {
      movies: Allmovies,
      selectedGenre,
      sortColum,
      currentPage,
      itemsPerPage,
    } = this.state;
    const filtered =
      selectedGenre && selectedGenre._id
        ? Allmovies.filter((m) => m.genre.name === selectedGenre.name)
        : Allmovies;
    const sorted = _.orderBy(filtered, sortColum.path, sortColum.order);
    const movies = paginate(sorted, currentPage, itemsPerPage);

    return { moviesCount: filtered.length, movies };
  }

  render() {
    const {
      genres,
      selectedGenre,
      currentPage,
      itemsPerPage,
      sortColum,
    } = this.state;
    const { moviesCount, movies } = this.getPagedData();
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={genres}
              selectedGenre={selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col">
            <p style={this.style}>
              {moviesCount === 0
                ? "There is no movies in database"
                : `Showing ${moviesCount} movies`}
            </p>
            <MoviesTable
              movies={movies}
              sortColum={sortColum}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />

            <Pagination
              itemsCount={moviesCount}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Movies;
