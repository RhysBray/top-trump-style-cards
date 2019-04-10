import * as React from "react";
import styles from "./not Found.module.scss";

export interface IProps {}

export interface IState {}

class NotFound extends React.Component<IProps, IState> {
  public render() {
    return <h3>Not Found</h3>;
  }
}

export default NotFound;
