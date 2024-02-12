import {Injectable} from '@angular/core';
import {User} from "./models";
import {BehaviorSubject, Observable, of, Subject, switchMap} from "rxjs";
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];
  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  errorEmitter: Subject<string> = new Subject<string>();

  constructor(private dataService: DataService) {
    this.dataService.getUsers()
      .subscribe((res: any) => {
        this.users = res.users;
        this.usersSubject.next([...this.users]);
      });
  }

  addUsers(user: User) {
    if (this.users.some(u => u.username === user.username)) {
      this.errorEmitter.next("Username already exists");
      return false;
    }

    if (this.users.some(u => u.email === user.email)) {
      this.errorEmitter.next("Email already exists");
      return false;
    }

    this.dataService.addUser(user).subscribe(((res: any) => {
      if (res.error) {
        this.errorEmitter.next(res.error);
        return;
      }

      user.id = res.user.id;
      this.users.push(user);
      this.usersSubject.next([...this.users]);
    }));

    return true;
  }

  getUser(userId: number): Observable<User | null> {
    return this.usersSubject.pipe(
      switchMap(users => {
        const user = users.find(u => u.id === userId);
        return user ? of({...user}) : of(null);
      })
    );
  }
}
