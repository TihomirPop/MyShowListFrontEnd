import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {User} from "../models";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  user: User = new User();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    const user = this.authService.getUser();

    if (user)
      this.user = user;
  }

  logout() {
    this.authService.logout();
  }
}
