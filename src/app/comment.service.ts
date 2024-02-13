import {Injectable} from '@angular/core';
import {DataService} from "./data.service";
import {Comment} from "./models";
import {BehaviorSubject, Subject} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private myComments: Comment[] = [];
  private myCommentsSubject: BehaviorSubject<Comment[]> = new BehaviorSubject<Comment[]>([]);
  errorEmitter: Subject<string> = new Subject<string>();

  constructor(private dataService: DataService, private router: Router) {
    this.dataService.getMyComments().subscribe({
      next: (res: any) => {
        this.myComments = res;
        this.myCommentsSubject.next([...this.myComments]);
      }, error: (e) => {
        this.errorEmitter.next(e);
      }
    });
  }

  getMyComments() {
    return this.myCommentsSubject;
  }

  addComment(comment: Comment) {
    this.dataService.addComment(comment).subscribe({
      next: (res: any) => {
        comment.id = res.id;
        this.myComments.push(comment);
        this.myCommentsSubject.next([...this.myComments]);
        this.reloadPage();
      }, error: (e) => {
        this.errorEmitter.next(e);
      }
    });
  }

  updateComment(comment: Comment) {
    this.dataService.updateComment(comment).subscribe({
      next: (_res: any) => {
        const index = this.myComments.findIndex(c => c.id === comment.id);
        this.myComments[index] = comment;
        this.myCommentsSubject.next([...this.myComments]);
      }, error: (e) => {
        this.errorEmitter.next(e);
      }
    });
  }

  deleteComment(id: number) {
    this.dataService.deleteComment(id).subscribe({
      next: (_res: any) => {
        this.myComments = this.myComments.filter(c => c.id !== id);
        this.myCommentsSubject.next([...this.myComments]);
        this.reloadPage();
      }, error: (e) => {
        this.errorEmitter.next(e);
      }
    });
  }

  reloadPage() {
    const url = this.router.url
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([url]);
    });
  }
}
