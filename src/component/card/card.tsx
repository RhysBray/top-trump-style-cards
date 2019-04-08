import * as React from "react";
import { ICard } from "../../assets/data/data";
import styles from "./card.module.scss";

export interface IProps {
  person: ICard;
  // name: string;
  // description: string;
}

export interface IState {}

class Card extends React.Component<IProps, IState> {
  public render() {
    return (
      <article className={styles.card}>
        <h3>{this.props.person.name}</h3>
        <section className={styles["person-info"]}>
          <p className={styles.summary}>{this.props.person.description}</p>

          <img src={this.props.person.picture} className={styles.image} />
        </section>
        <table className={styles.stats}>
          <tr>
            <th>Attitude</th>
            <td>{this.props.person.stats.attitude}</td>
          </tr>
          <tr>
            <th>Greed</th>
            <td>{this.props.person.stats.greed}</td>
          </tr>
          <tr>
            <th>Loudness</th>
            <td>{this.props.person.stats.loudness}</td>
          </tr>
          <tr>
            <th>MVP</th>
            <td>{this.props.person.stats.mvp}</td>
          </tr>
          <tr>
            <th>SASS</th>
            <td>{this.props.person.stats.sass}</td>
          </tr>
        </table>
      </article>
    );
  }
}

export default Card;
