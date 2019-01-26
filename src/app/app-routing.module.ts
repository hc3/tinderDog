import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path:'pages', loadChildren:'app/pages/pages.module#PagesModule', canActivate:[AuthGuard]},
  { path:'login', component: LoginComponent },
  { path:'', redirectTo:'pages', pathMatch:'full'},
  { path:'**', redirectTo:'pages'}
  //{ path:'user', loadChildren:''},
  //{ path:'', redirectTo:'home', pathMatch:'full'},
  //{ path:'**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
