import React, { Component } from "react";
import "./App.css";
import "normalize.css";

import { Provider } from "react-redux";
import store from "./store";
import Search from "./components/header/Search";
import SavedSearchList from "./components/savedSearch/SavedSearchList";
import ImagesContainer from "./components/images/ImagesContainer";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpinner,
  faSearch,
  faImages,
  faSadCry,
  faSave,
  faTimes,
  faAngleRight,
  faAngleLeft
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faSpinner,
  faSearch,
  faImages,
  faSadCry,
  faSave,
  faTimes,
  faAngleRight,
  faAngleLeft
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <div className="container">
              <div className="flex-header">
                <h1 className="site-title">Image Search Web App</h1>
                <Search />
              </div>
            </div>
          </header>
          <div className="App-body container py-5">
            <SavedSearchList />
            <ImagesContainer />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
