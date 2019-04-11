import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
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
          <Switch>
            <Route path="/cards" component={CardContainer} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/students" component={Students} />
            <Route path="/trainers" component={Trainers} />
            <Route exact={true} path="/" component={CardContainer} />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
