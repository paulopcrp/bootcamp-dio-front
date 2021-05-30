import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DahsboardPageComponent } from './dashboard/dahsboard-page/dahsboard-page.component';

const routes: Routes = [
  { path:'dashboard', component: DahsboardPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
