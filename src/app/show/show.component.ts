import {Component, OnInit} from '@angular/core';
import {getGenreString, Show} from "../models";
import {ShowService} from "../show.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit{
  id?: number;
  show: Show = new Show();

  constructor(private showService: ShowService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (!this.id)
      return;

    this.showService.getShow(this.id).then((show: any) => this.show = show)
  }

  protected readonly getGenreString = getGenreString;
}
