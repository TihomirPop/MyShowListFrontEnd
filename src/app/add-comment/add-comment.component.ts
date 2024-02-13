import {Component, Input, OnInit} from '@angular/core';
import {Comment, User} from "../models";
import {AuthService} from "../auth.service";
import {CommentService} from "../comment.service";

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.css'
})
export class AddCommentComponent implements OnInit{
  @Input() showId: number = -1;
  isAdding: boolean = false;
  comment: Comment = new Comment();
  user: User = new User();

  constructor(private authService: AuthService, private commentService: CommentService) {
  }

  ngOnInit() {
    const user = this.authService.getUser();

    if (user)
      this.user = user;
  }

  addCommentButtonHandler() {
    this.isAdding = !this.isAdding;
    this.comment.text = '';
  }

  sendButtonHandler() {
    this.comment.userId = this.user.id;
    this.comment.showId = this.showId;
    this.commentService.addComment({...this.comment})
    this.isAdding = false;
  }
}
