import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path:'pages', loadChildren:'app/pages/pages.module#PagesModule'},
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
