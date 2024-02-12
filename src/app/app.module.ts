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
    FormsModule
  ],
  providers: [AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
