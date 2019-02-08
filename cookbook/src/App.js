import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";
import MainLayout from "./pages/MainLayout";

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>{routes}</MainLayout>
      </BrowserRouter>
    );
  }
}

export default App;
