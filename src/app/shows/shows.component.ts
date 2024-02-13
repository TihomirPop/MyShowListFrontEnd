import {Component, OnInit} from '@angular/core';
import {ShowService} from "../show.service";
import {getGenreString, Show} from "../models";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrl: './shows.component.css'
})
export class ShowsComponent implements OnInit {
  shows: Show[] = [];
  search: string = '';
  columnsToDisplay = ['index', 'title', 'type', 'genres', 'episodes', 'startDate'];

  constructor(private showService: ShowService, private router: Router) {
  }

  ngOnInit() {
    this.showService.getShows().subscribe({
      next: (shows: Show[]) => {
        this.shows = shows;
      }
    });
  }

  onRowClick(show: Show) {
    this.router.navigate([`${show.id}`]);
  }

  protected readonly getGenreString = getGenreString;
}
