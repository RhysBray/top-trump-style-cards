import * as React from "react";
import { ICard } from "../../assets/data/data";
import styles from "./card.module.scss";

export interface IProps {
  person: ICard;
}

export interface IState {
  isFlipped: boolean;
  numberOfClicks: number;
}

class Card extends React.Component<IProps, IState> {
  public state = { isFlipped: false, numberOfClicks: 0 };

  public onClick = () => {
    this.setState({
      isFlipped: !this.state.isFlipped,
      numberOfClicks: this.state.numberOfClicks + 1
    });

    console.log(this.state.numberOfClicks);
    console.log(this.state.isFlipped);
  };

  public render() {
    const flippedStyle = this.state.isFlipped
      ? styles.flipBack
      : styles.flipFront;

    return (
      <article
        className={`${styles.card} ${flippedStyle}`}
        onClick={this.onClick}
      >
        <div className={styles.hideFront}>
          <h3>
            {this.props.person.name} {this.state.numberOfClicks}{" "}
            {"" + this.state.isFlipped}
          </h3>
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
        </div>
      </article>
    );
  }
}

export default Card;
