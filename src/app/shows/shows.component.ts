import {Component, OnInit} from '@angular/core';
import {ShowService} from "../show.service";
import {Show} from "../models";
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

  getGenreString(show: Show): string {
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

  onRowClick(show: Show) {
    this.router.navigate([`/shows/${show.id}`]);
  }
}
