import React, { Component } from "react";
import "./App.css";
import { people } from "./assets/data/data";
import Card from "./component/card/card";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>_nology Top Trumps</h1>
        </header>
        <main>
          {people.map((data, i) => (
            <Card person={people[i]} />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
