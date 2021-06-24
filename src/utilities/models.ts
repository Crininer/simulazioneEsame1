export interface AppLocation {
  name: string;
  plants: Array<Plant>;
}

export interface Plant {
  name: string;
  weather: number;
  routes: Array<Route>;
}

export interface Route {
  name: string;
  difficulty: number;
  peopleInQueue: number;
}

export const difficultyDictionary = {
  ['Facile']: 1,
  ['Media']: 2,
  ['Difficile']: 3,
};
export const weatherDictionary = {
  ['Neve Assente']: 0,
  ['Neve Scarsa']: 1,
  ['Neve Moderata']: 2,
  ['Neve Abbondante']: 3,
};
