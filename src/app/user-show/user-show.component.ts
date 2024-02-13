import {Component, OnInit} from '@angular/core';
import {Show, UserShow} from "../models";
import {UserShowService} from "../user-show.service";
import {AuthService} from "../auth.service";
import {ShowService} from "../show.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrl: './user-show.component.css'
})
export class UserShowComponent implements OnInit {
  show: Show = new Show();
  userShow: UserShow = new UserShow();
  userShows: UserShow[] = [];

  constructor(private userShowService: UserShowService, private authService: AuthService, private showService: ShowService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.showService.getShow(id).then((s: any) => {
      this.show = s;
      this.userShowService.getUserShows().subscribe(res => {
        this.userShows = res
        const index = this.userShows.findIndex(s => s.showId === this.show.id);
        if (index !== -1)
          this.userShow = this.userShows[index];
      });
    })
  }

  saveShow() {
    if (this.userShow.id !== -1) {
      this.userShowService.updateUserShow(this.userShow);
      return;
    }

    const user = this.authService.getUser();
    if (!user)
      return;

    if (this.userShow.progress > this.show.episodes)
      this.userShow.progress = this.show.episodes;

    this.userShow.showId = this.show.id;
    this.userShow.userId = user.id;
    this.userShowService.addUserShow(this.userShow);
  }

  deleteShow() {
    if (this.userShow.id === -1)
      return;

    this.userShowService.deleteUserShow(this.userShow.id);
    this.userShow = new UserShow();
  }
}
