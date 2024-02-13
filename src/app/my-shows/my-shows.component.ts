import {Component, OnInit} from '@angular/core';
import {getGenreString, Staus, UserShow} from "../models";
import {Router} from "@angular/router";
import {UserShowService} from "../user-show.service";

@Component({
  selector: 'app-my-shows',
  templateUrl: './my-shows.component.html',
  styleUrl: './my-shows.component.css'
})
export class MyShowsComponent implements OnInit{
  userShows: UserShow[] = [];
  search: string = '';
  columnsToDisplay = ['index', 'title', 'type', 'status', 'progress', 'score'];

  constructor(private userShowService: UserShowService, private router: Router) {
  }

  ngOnInit() {
    this.userShowService.getUserShows().subscribe({
      next: (shows: UserShow[]) => {
        this.userShows = shows;
      }
    });
  }

  onRowClick(userShow: UserShow) {
    this.router.navigate([`${userShow.show.id}`]);
  }

  protected readonly getGenreString = getGenreString;
  protected readonly Staus = Staus;
}
