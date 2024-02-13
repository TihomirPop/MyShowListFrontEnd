import {Component, Input} from '@angular/core';
import {Comment, User} from "../models";
import {UserService} from "../user.service";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input() comment: Comment = new Comment();
  @Input() index: number = 0;
  //
  // isEditing: boolean = false;
  // editingComment: string = '';
  // postUser: User = new User();
  // user: User = new User();
  //
  // constructor(private commentService: CommentService, private userService: UserService, private authService: AuthService) {
  // }
  //
  // ngOnInit() {
  //   this.userService.getUser(this.post.userId)
  //     .subscribe(postUser => {
  //       if (postUser)
  //         this.postUser = postUser;
  //     });
  //
  //   const user = this.authService.getUser();
  //   if (user) {
  //     this.user = user;
  //   }
  // }
  //
  // deletePost() {
  //   if (this.post._id)
  //     this.postService.deletePost(this.post._id);
  // }
  //
  // startEditing() {
  //   this.isEditing = true;
  //   this.editingComment = this.post.comment;
  // }
  //
  // save() {
  //   this.post.comment = this.editingComment;
  //   this.postService.editPost(this.post);
  //   this.isEditing = false;
  // }
  //
  // cancel() {
  //   this.isEditing = false;
  // }
}
