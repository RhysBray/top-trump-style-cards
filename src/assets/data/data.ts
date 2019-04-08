import craig from "../../assets/craig.png";

export interface IStats {
  loudness: number;
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
    picture: craig,
    stats: { loudness: 1, greed: 1, attitude: 1, sass: 1, mvp: 1 }
  },
  {
    name: "Cameron Sinclair",
    description:
      "A former professional poker player and ongoing property tycoon, Cameron lives up to his colourful credentials. Expect sharp shirts and charm, this guy is the quintessential modern man.",
    picture: null,
    stats: { loudness: 1, greed: 1, attitude: 1, sass: 1, mvp: 1 }
  },
  {
    name: "Lauren Groombridge",
    description:
      "Much like an angel descended from heaven, Lauren has powers beyond even her knowledge. An inspirational and award winning force for motivation, she embodies feminine power and has insight beyond her years.",
    picture: null,
    stats: { loudness: 1, greed: 1, attitude: 1, sass: 1, mvp: 1 }
  },
  {
    name: "Ben Ridgeway",
    description:
      "Ben is a like a mixture of Ed Sheeran and Vinnie Jones. Softly spoken and a red-head, but also a bit cockney and 'Jack the lad.' Best of both worlds.",
    picture: null,
    stats: { loudness: 1, greed: 1, attitude: 1, sass: 1, mvp: 1 }
  },
  {
    picture: "",
    name: "Myles",
    description:
      "Has a very strong personality which in shown through being the loudest in the group",
    stats: { loudness: 9, greed: 7, attitude: 6, sass: 8, mvp: 4 }
  },
  {
    picture: "",
    name: "Lee",
    description:
      "Lee is basically a professional athlete with a great physique who loves all _nologists. Only problem is, his sass is lacking.",
    stats: { loudness: 5, greed: 5, attitude: 7, sass: 5, mvp: 7 }
  },
  {
    picture: "",
    name: "Mo",
    description:
      "He is on a 12 week intensive course currently using React on a real life project.",
    stats: { loudness: 7, greed: 7, attitude: 9, sass: 6, mvp: 4 }
  },
  {
    picture: "",
    name: "Chloe",
    description: "Chloe is a nologyst, she loves to code.",
    stats: { loudness: 5, greed: 4, attitude: 8, sass: 8, mvp: 7 }
  },
  {
    name: "Tom",
    description: "TEQUILAA",
    picture: null,
    stats: { loudness: 4, greed: 2, attitude: 9, sass: 1, mvp: 10 }
  },
  {
    name: "Andy",
    description:
      "A strong jack-of-all trades with a diversified portolio of stats, experiences and previous careers. Avid gamer and coffee addict.",
    picture: null,
    stats: { loudness: 5, greed: 5, attitude: 5, sass: 5, mvp: 5 }
  },
  {
    name: "Siobhan",
    description:
      "Junior web developer with a great sense of management, team leading & baking.",
    picture: null,
    stats: { loudness: 7, greed: 2, attitude: 8, sass: 9, mvp: 8 }
  },
  {
    name: "James",
    description:
      "James is _nology's main design guy. He is well known for wanting to swim through the galaxy and asking what Jason's got to do with it.",
    picture: "",
    stats: { loudness: 7, greed: 3, attitude: 8, sass: 9, mvp: 6 }
  },
  {
    name: "Sian",
    description: "philosophy graduate wizard coder",
    picture: "any",
    stats: { loudness: 4, greed: 0, attitude: 3, sass: 3, mvp: 10 }
  }
];
