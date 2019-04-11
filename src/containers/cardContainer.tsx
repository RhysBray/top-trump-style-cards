import * as React from "react";
import { people } from "../assets/data/data";
import Card from "../component/card/card";
import SearchBar from "../component/searchBar/searchBar";
import styles from "../containers/cardContainer.module.scss";

export interface IProps {}

export interface IState {
  searchText: string;
}

class CardContainer extends React.Component<IProps, IState> {
  public state = { searchText: "" };

  public render() {
    return (
      <div>
        <SearchBar onSearchTextChange={this.onSearchTextChange} />
        <section className={styles.section}>
          {people.map((card, i) => (
            <Card person={card} key={i} />
          ))}
        </section>
        {console.log(this.state.searchText)}
      </div>
    );
  }

  private onSearchTextChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    this.setState({ searchText: event.target.value });
}

export default CardContainer;
