import * as React from "react";
import styles from "./navBar.module.scss";

export interface IProps {}

export interface IState {}

class NavBar extends React.Component<IProps, IState> {
  public render() {
    return <h3>Nav Bar</h3>;
  }
}

export default NavBar;
