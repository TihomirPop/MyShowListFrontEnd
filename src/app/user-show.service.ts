import {Injectable} from '@angular/core';
import {UserShow} from "./models";
import {BehaviorSubject, Subject} from "rxjs";
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class UserShowService {
  private userShows : UserShow[] = [];
  private userShowsSubject: BehaviorSubject<UserShow[]> = new BehaviorSubject<UserShow[]>([]);
  errorEmitter: Subject<string> = new Subject<string>();

  constructor(private dataService: DataService) {
    this.dataService.getMyShows().subscribe({
      next: (res: any) => {
        this.userShows = res;
        this.userShowsSubject.next([...this.userShows]);
      }, error: (e) => {
        this.errorEmitter.next(e);
      }
    });
  }

  getUserShows() {
    return this.userShowsSubject;
  }

  addUserShow(userShow: UserShow) {
    this.dataService.addMyShow(userShow).subscribe({
      next: (res: any) => {
        userShow.id = res.id;
        userShow.show = res.show;
        this.userShows.push(userShow);
        this.userShowsSubject.next([...this.userShows]);
      }, error: (e) => {
        this.errorEmitter.next(e);
      }
    });
  }

  updateUserShow(userShow: UserShow) {
    this.dataService.updateMyShow(userShow).subscribe({
      next: (res: any) => {
        userShow.show = res.show;
        const index = this.userShows.findIndex(s => s.id === userShow.id);
        this.userShows[index] = userShow;
        this.userShowsSubject.next([...this.userShows]);
      }, error: (e) => {
        this.errorEmitter.next(e);
      }
    });
  }

  deleteUserShow(id: number) {
    this.dataService.deleteMyShow(id).subscribe({
      next: (_res: any) => {
        this.userShows = this.userShows.filter(s => s.id !== id);
        this.userShowsSubject.next([...this.userShows]);
      }, error: (e) => {
        this.errorEmitter.next(e);
      }
    });
  }
}
