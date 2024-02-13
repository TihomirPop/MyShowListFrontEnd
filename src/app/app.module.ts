import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthGuard} from "./auth.guard";
import {AuthInterceptor} from "./auth.interceptor";
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { ShowsComponent } from './shows/shows.component';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable, MatTextColumn
} from "@angular/material/table";
import { FilterPipe } from './filter.pipe';
import { CommentComponent } from './comment/comment.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { UserShowComponent } from './user-show/user-show.component';
import { MyListComponent } from './my-list/my-list.component';
import { MyShowsComponent } from './my-shows/my-shows.component';
import { AddShowComponent } from './add-show/add-show.component';
import {MatFormField} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    ShowComponent,
    ShowsComponent,
    FilterPipe,
    CommentComponent,
    AddCommentComponent,
    UserShowComponent,
    MyListComponent,
    MyShowsComponent,
    AddShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTextColumn,
    FormsModule,
    MatFormField,
    MatSelect,
    MatOption
  ],
  providers: [AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
