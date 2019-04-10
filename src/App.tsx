import React, { Component } from "react";
import "./App.css";
import NavBar from "./component/navBar/navBar";
import NotFound from "./component/notFound/notFound";
import Students from "./component/students/students";
import Trainers from "./component/trainers/trainers";
import CardContainer from "./containers/cardContainer";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>_nology Top Trumps</h1>
        </header>
        <NavBar />
        <main>
          <CardContainer />
          <Trainers />
          <Students />
          <NotFound />
        </main>
      </div>
    );
  }
}

export default App;
