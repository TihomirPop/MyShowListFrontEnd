import {Injectable} from '@angular/core';
import {DataService} from "./data.service";
import {Show} from "./models";
import {BehaviorSubject, lastValueFrom, Subject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  private shows: Show[] = [];
  private showsSubject: BehaviorSubject<Show[]> = new BehaviorSubject<Show[]>([]);
  errorEmitter: Subject<string> = new Subject<string>();

  constructor(private dataService: DataService, private router: Router) {
    this.dataService.getShows().subscribe({
      next: (res: any) => {
        this.shows = res;
        this.showsSubject.next([...this.shows]);
      }, error: (e) => {
        this.errorEmitter.next(e);
      }
    });
  }

  getShows() {
    return this.showsSubject;
  }

  getShow(id: number) {
    return lastValueFrom(this.dataService.getShow(id));
  }

  addShow(show: Show) {
    this.dataService.addShow(show).subscribe({
      next: (res: any) => {
        show.id = res.id;
        show.genres = res.genres;
        this.shows.push(show);
        this.showsSubject.next([...this.shows]);
        this.router.navigate([`/${show.id}`]);
      }, error: (e) => {
        this.errorEmitter.next(e);
      }
    });
  }

  updateShow(show: Show) {
    this.dataService.updateShow(show).subscribe({
      next: (_res: any) => {
        const index = this.shows.findIndex(s => s.id === show.id);
        this.shows[index] = show;
        this.showsSubject.next([...this.shows]);
      }, error: (e) => {
        this.errorEmitter.next(e);
      }
    });
  }

  deleteShow(id: number) {
    this.dataService.deleteShow(id).subscribe({
      next: (_res: any) => {
        this.shows = this.shows.filter(s => s.id !== id);
        this.showsSubject.next([...this.shows]);
        this.router.navigate(['/']);
      }, error: (e) => {
        this.errorEmitter.next(e);
      }
    });
  }
}
