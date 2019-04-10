// import craig from "../../assets/images/craig.png";
// import liam from "../../assets/images/craig.png";
// import shea from "../../assets/images/craig.png";

import andy from "../../assets/images/andy.jpg";
import ben from "../../assets/images/ben.png";
import cameron from "../../assets/images/cameron.jpg";
import chloe from "../../assets/images/chloe.jpg";
import james from "../../assets/images/james.jpg";
import lauren from "../../assets/images/lauren.jpg";
import lee from "../../assets/images/lee.jpg";
import mo from "../../assets/images/mo.jpg";
import myles from "../../assets/images/myles.jpg";
import rhys from "../../assets/images/rhys.jpg";
import sian from "../../assets/images/sian.jpg";
import siobhan from "../../assets/images/siobhan.png";
import tom from "../../assets/images/tom.jpg";

export interface IStats {
  readonly loudness: number;
  greed: number;
  attitude: number;
  sass: number;
  mvp: number;
}

export interface ICard {
  name: string;
  description: string;
  picture: any;
  stats: IStats;
}

export const people: ICard[] = [
  {
    name: "Rhys Bray",
    description:
      "Rhys is a nologist. He is often quiet but also is not afraid to say it how it is.. and has great jokes about mugs.",
    picture: rhys,
    stats: { loudness: 3, greed: 4, attitude: 7, sass: 5, mvp: 7 }
  },
  {
    name: "Cameron Sinclair",
    description:
      "A former professional poker player and ongoing property tycoon, Cameron lives up to his colourful credentials. Expect sharp shirts and charm, this guy is the quintessential modern man.",
    picture: cameron,
    stats: { loudness: 6, greed: 5, attitude: 7, sass: 6, mvp: 8 }
  },
  {
    name: "Lauren Groombridge",
    description:
      "Much like an angel descended from heaven, Lauren has powers beyond even her knowledge. An inspirational and award winning force for motivation, she embodies feminine power and has insight beyond her years.",
    picture: lauren,
    stats: { loudness: 2, greed: 1, attitude: 9, sass: 4, mvp: 7 }
  },
  {
    name: "Ben Ridgeway",
    description:
      "Ben is a like a mixture of Ed Sheeran and Vinnie Jones. Softly spoken and a red-head, but also a bit cockney and 'Jack the lad.' Best of both worlds.",
    picture: ben,
    stats: { loudness: 9, greed: 4, attitude: 8, sass: 8, mvp: 6 }
  },
  {
    name: "Myles",
    description:
      "Has a very strong personality which in shown through being the loudest in the group",
    picture: myles,
    stats: { loudness: 9, greed: 7, attitude: 6, sass: 8, mvp: 4 }
  },
  {
    name: "Lee",
    description:
      "Lee is basically a professional athlete with a great physique who loves all _nologists. Only problem is, his sass is lacking.",
    picture: lee,
    stats: { loudness: 5, greed: 5, attitude: 7, sass: 5, mvp: 7 }
  },
  {
    name: "Mo",
    description:
      "He is on a 12 week intensive course currently using React on a real life project.",
    picture: mo,
    stats: { loudness: 7, greed: 7, attitude: 9, sass: 6, mvp: 4 }
  },
  {
    name: "Chloe",
    description: "Chloe is a nologyst, she loves to code.",
    picture: chloe,
    stats: { loudness: 5, greed: 4, attitude: 8, sass: 8, mvp: 7 }
  },
  {
    name: "Tom",
    description: "TEQUILAA",
    picture: tom,
    stats: { loudness: 4, greed: 2, attitude: 9, sass: 1, mvp: 10 }
  },
  {
    name: "Andy",
    description:
      "A strong jack-of-all trades with a diversified portolio of stats, experiences and previous careers. Avid gamer and coffee addict.",
    picture: andy,
    stats: { loudness: 5, greed: 5, attitude: 5, sass: 5, mvp: 5 }
  },
  {
    name: "Siobhan",
    description:
      "Junior web developer with a great sense of management, team leading & baking.",
    picture: siobhan,
    stats: { loudness: 7, greed: 2, attitude: 8, sass: 9, mvp: 8 }
  },
  {
    name: "James",
    description:
      "James is _nology's main design guy. He is well known for wanting to swim through the galaxy and asking what Jason's got to do with it.",
    picture: james,
    stats: { loudness: 7, greed: 3, attitude: 8, sass: 9, mvp: 6 }
  },
  {
    name: "Sian",
    description: "philosophy graduate wizard coder",
    picture: sian,
    stats: { loudness: 4, greed: 0, attitude: 3, sass: 3, mvp: 10 }
  }
];
