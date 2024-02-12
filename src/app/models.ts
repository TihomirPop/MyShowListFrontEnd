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
  genres?: Genre[];
  comments?: Comment[];
}export class Genre {
  id: number = 0;
  name: string = '';
}


export class Comment {
  id: number = 0;
  userId: number = 0;
  showId: number = 0;
  text: string = '';
}
