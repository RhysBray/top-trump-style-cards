import * as React from "react";
import styles from "./searchBar.module.scss";

export interface IProps {
  onSearchTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IState {}

class SearchBar extends React.Component<IProps, IState> {
  public render() {
    return (
      <div className={styles["search-div"]}>
        <input
          type="search"
          name="search-bar"
          placeholder="Enter your search here.."
          className={styles["search-bar"]}
          onChange={this.props.onSearchTextChange}
        />
      </div>
    );
  }
}

export default SearchBar;
