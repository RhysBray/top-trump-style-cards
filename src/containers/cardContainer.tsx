import * as React from "react";
import { people } from "../assets/data/data";
import Card from "../component/card/card";
import styles from "../containers/cardContainer.module.scss";

export interface IProps {}

export interface IState {}

class CardContainer extends React.Component<IProps, IState> {
  public render() {
    return (
      <section className={styles.section}>
        {people.map((card, i) => (
          <Card person={card} key={i} />
        ))}
      </section>
    );
  }
}

export default CardContainer;
