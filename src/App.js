import React, { Component } from "react";
import Movies from "./components/movies";
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
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;
