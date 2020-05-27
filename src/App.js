import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navBar";
import Movies from "./components/movies";
import MovieForm from "./components/common/movieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/not-found";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeart,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(far, faHeart, faSortUp, faSortDown);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Redirect exact from="/" to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
