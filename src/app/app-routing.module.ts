import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobComponent } from './job/job.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/job',
    pathMatch: 'full',   // This is the Default Route When browser Start
  },
  {
    path: 'job',
    component: JobComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
