import { Component } from '@angular/core';
import {Show} from "../models";
import {ShowService} from "../show.service";

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrl: './add-show.component.css'
})
export class AddShowComponent {
  show: Show = new Show();
  genres: string[] = [];
  error: string = '';

  constructor(private showService: ShowService) {
    showService.errorEmitter.subscribe(_e => this.error = "Wrong input");
  }

  addShow() {
    this.show.genres = this.genres.map(g => ({id: parseInt(g)}) as any);
    this.show.type = parseInt(this.show.type) as any;

    this.showService.addShow(this.show);
  }
}
