import React, { Component } from "react";
import "./App.css";
import "normalize.css";

import { Provider } from "react-redux";
import store from "./store";
import Search from "./components/header/Search";
import SavedSearchList from "./components/SavedSearchList";
import ImagesContainer from "./components/ImagesContainer";
import * as regularShit from "@fortawesome/free-regular-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSpinner,
  faSearch,
  faImages,
  faSadCry,
  faSave,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

library.add(faSpinner, faSearch, faImages, faSadCry, faSave, faTimes);

class App extends Component {
  componentDidMount() {}
  render() {
    console.log(regularShit);
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
            <ImagesContainer />
            <SavedSearchList />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
