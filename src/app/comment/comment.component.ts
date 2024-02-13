import {Component, Input, OnInit} from '@angular/core';
import {Comment, User} from "../models";
import {UserService} from "../user.service";
import {AuthService} from "../auth.service";
import {CommentService} from "../comment.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent implements OnInit{
  @Input() comment: Comment = new Comment();
  @Input() index: number = 0;

  isEditing: boolean = false;
  editingComment: string = '';
  commentUser: User = new User();
  user: User = new User();

  constructor(private commentService: CommentService, private userService: UserService, private authService: AuthService) {
  }

  ngOnInit() {
    this.userService.getUser(this.comment.userId)
      .subscribe(commentUser => {
        if (commentUser)
          this.commentUser = commentUser;
      });

    const user = this.authService.getUser();
    if (user) {
      this.user = user;
    }
  }

  deleteComment() {
    if (this.comment.id !== -1){
      this.commentService.deleteComment(this.comment.id);
    }
  }

  startEditing() {
    this.isEditing = true;
    this.editingComment = this.comment.text;
  }

  save() {
    this.comment.text = this.editingComment;
    this.commentService.updateComment(this.comment);
    this.isEditing = false;
  }

  cancel() {
    this.isEditing = false;
  }
}
