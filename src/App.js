import React, { Component } from "react";
import "./App.css";
import "normalize.css";

import { Provider } from "react-redux";
import store from "./store";
import Search from "./components/header/Search";
import ImagesGrid from "./components/ImagesGrid";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons";

library.add(faCheckSquare, faSpinner);

class App extends Component {
  componentDidMount() {}
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
          <div className="container">
            <ImagesGrid />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
