import * as React from "react";
import styles from "./students.module.scss";

export interface IProps {}

export interface IState {}

class Students extends React.Component<IProps, IState> {
  public render() {
    return <h3>Students</h3>;
  }
}

export default Students;
