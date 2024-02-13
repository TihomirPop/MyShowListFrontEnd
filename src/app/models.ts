export class User {
  id: number = 0;
  username: string = '';
  email: string = '';
  password: string = '';
  salt: string = '';
  isAdmin: boolean = false;
}

export class Show {
  id: number = 0;
  title: string = '';
  description: string = '';
  type: string = '';
  episodes: number = 0;
  startDate: Date = new Date();
  endDate: Date = new Date();
  imageUrl: string = '';
  genres?: Genre[];
  comments?: Comment[];
}

export class Genre {
  id: number = 0;
  name: string = '';
}

export class Comment {
  id: number = -1;
  userId: number = -1;
  showId: number = -1;
  text: string = '';
  updatedAt: Date = new Date();
}

export class UserShow {
  id: number = -1;
  userId: number = -1;
  showId: number = -1;
  status: Staus = Staus.PLAN_TO_WATCH;
  progress: number = 0;
  score: number = 0;
  show: Show = new Show();
}

export enum Staus {
  WATCHING,
  COMPLETED,
  ON_HOLD,
  DROPPED,
  PLAN_TO_WATCH
}

export function getGenreString(show: Show): string {
  if (!show.genres)
    return '';

  const formattedStrings = show.genres.map(g => {
    const words = g.name
      .toLowerCase()
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1));
    return words.join(' ');
  });

  return formattedStrings.join(', ')
}
