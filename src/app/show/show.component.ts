import {Component, OnInit} from '@angular/core';
import {getGenreString, Show} from "../models";
import {ShowService} from "../show.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent implements OnInit{
  id?: number;
  show: Show = new Show();
  user = this.authService.getUser();

  constructor(private showService: ShowService, private route: ActivatedRoute, private authService: AuthService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (!this.id)
      return;

    this.showService.getShow(this.id).then((show: any) => this.show = show)
  }

  deleteShow() {
    this.id = this.route.snapshot.params['id'];
    if (!this.id)
      return;

    this.showService.deleteShow(this.id);
  }

  protected readonly getGenreString = getGenreString;
}
