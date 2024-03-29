import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthGuard} from "./auth.guard";
import {HomeComponent} from "./home/home.component";
import {ShowComponent} from "./show/show.component";
import {MyListComponent} from "./my-list/my-list.component";
import {AddShowComponent} from "./add-show/add-show.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'my-list', component: MyListComponent, canActivate: [AuthGuard]},
  {path: 'add-show', component: AddShowComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: ':id', component: ShowComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
