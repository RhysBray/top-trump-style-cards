import { library } from "@fortawesome/fontawesome-svg-core";
import * as React from "react";
import { NavLink } from "react-router-dom";
import styles from "./navBar.module.scss";

export interface IProps {}

export interface IState {}

class NavBar extends React.Component<IProps, IState> {
  public state = { menuOpen: true };

  public onClick = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  public navRender = () => {
    return (
      <nav className={styles["nav-list"]}>
        {this.state.menuOpen ? (
          <div>
            <div className={styles["x-box"]}>
              <p onClick={this.onClick}>X</p>
            </div>
            <ul>
              <li>
                <NavLink to="/cards" className={styles["nav-item"]}>
                  Cards
                </NavLink>
              </li>
              <li>
                <NavLink to="/students" className={styles["nav-item"]}>
                  Students
                </NavLink>
              </li>
              <li>
                <NavLink to="/trainers" className={styles["nav-item"]}>
                  Trainers
                </NavLink>
              </li>
            </ul>
          </div>
        ) : (
          <div className={styles["x-box"]}>
            <p onClick={this.onClick}>X</p>
          </div>
        )}
      </nav>
    );
  };

  public render() {
    return <nav>{this.navRender()}</nav>;
  }
}

export default NavBar;
